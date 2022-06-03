import ActiveLink from "./activeLink";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { ChevronUpIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, UnorderedList, ListItem, Icon } from "@chakra-ui/react";

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

    return (
      <ListItem pb={1}>
        {!hasSubMenu && (
          <Box display="flex" alignItems="center" w="100%">
            <Icon as={BsDot} pb={[2, 1]} h="100%" />
            <ActiveLink
              href={`/posts/${data.url}`}
              fontWeight="semibold"
              onClick={onClose}
              w={"100%"}
              fontSize={["xl", "md"]}
              lineHeight="1.1rem"
              pb={[2, 1]}
            >
              {data.title}
            </ActiveLink>
          </Box>
        )}{" "}
        {hasSubMenu && (
          <Box display="flex" alignItems="center" w="100%" pb={1}>
            {isActive ? (
              <ChevronUpIcon
                mb={1}
                mr={1}
                onClick={() => handleSubmenuClick(menuName)}
              />
            ) : (
              <ChevronRightIcon
                mb={1}
                mr={1}
                onClick={() => handleSubmenuClick(menuName)}
              />
            )}
            <Button
              display="block"
              colorScheme="gray.800"
              fontSize={["2xl", "lg"]}
              w="100%"
              whiteSpace="normal"
              textAlign="left"
              variant="link"
              pb={1}
              onClick={() => handleSubmenuClick(menuName)}
            >
              {data.title}
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
