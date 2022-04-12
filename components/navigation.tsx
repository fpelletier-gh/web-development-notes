import ActiveLink from "./activeLink";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Navigation({ menus, onClose = () => {} }) {
  const [activeMenus, setActiveMenus] = useState([]);

  const handleSubmenuClick = (menuName: string[]) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => {
    const isActive = activeMenus.includes(menuName);
    const blue = useColorModeValue("blue.600", "blue.300");

    return (
      <ListItem>
        {!hasSubMenu && (
          <Box
            display="flex"
            borderLeft="2px solid"
            borderColor={blue}
            w="100%"
            dept={dept}
          >
            <ActiveLink
              href={`/posts/${data.url}`}
              fontWeight="semibold"
              onClick={onClose}
              w={"100%"}
              pl="2"
              fontSize={["2xl", "md"]}
            >
              {data.title}
            </ActiveLink>
          </Box>
        )}{" "}
        {hasSubMenu && (
          <Box display="block" w="100%" py="0.3rem" dept={dept}>
            <Button
              colorScheme="gray.800"
              fontSize={["3xl", "xl"]}
              w="100%"
              justifyContent="left"
              variant="link"
              onClick={() => handleSubmenuClick(menuName)}
            >
              {data.title}
              {isActive ? (
                <ChevronUpIcon ml="0.2rem" />
              ) : (
                <ChevronDownIcon ml="0.2rem" />
              )}
            </Button>
          </Box>
        )}
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.submenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
      </ListItem>
    );
  };

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    dept = dept + 1;

    return (
      <UnorderedList
        display={toggle ? "flex" : "none"}
        flexDir="column"
        listStyleType="none"
      >
        {data.map((menu: { submenu: any }, index: number) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UnorderedList>
    );
  };

  return (
    <UnorderedList display="flex" flexDir="column" listStyleType="none">
      {menus.map((menu: { submenu: any }, index: number) => {
        const dept = 1;
        const menuName = `sidebar-menu-${dept}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </UnorderedList>
  );
}
