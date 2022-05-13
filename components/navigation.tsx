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
          <Box display="flex" w="100%">
            <ActiveLink
              href={`/posts/${data.url}`}
              fontWeight="semibold"
              onClick={onClose}
              w={"100%"}
              fontSize={["xl", "md"]}
            >
              {data.title}
            </ActiveLink>
          </Box>
        )}{" "}
        {hasSubMenu && (
          <Box display="flex" alignItems="center" w="100%" py="0.3rem">
            <Button
              display="block"
              colorScheme="gray.800"
              fontSize={["2xl", "xl"]}
              w="100%"
              whiteSpace="normal"
              textAlign="left"
              variant="link"
              onClick={() => handleSubmenuClick(menuName)}
            >
              {data.title}
            </Button>
            {isActive ? (
              <ChevronUpIcon
                ml="0.2rem"
                onClick={() => handleSubmenuClick(menuName)}
              />
            ) : (
              <ChevronDownIcon
                ml="0.2rem"
                onClick={() => handleSubmenuClick(menuName)}
              />
            )}
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
