import NextLink from "next/link";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, UnorderedList, ListItem, Link } from "@chakra-ui/react";
export default function Navigation({ menus }) {
  const [activeMenus, setActiveMenus] = useState([]);

  const handleSubmenuClick = (menuName) => {
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
      <ListItem>
        {!hasSubMenu && (
          <Box display="block" w="100%" dept={dept}>
            <NextLink href={data.url} passHref>
              <Link fontWeight="semibold">{data.title}</Link>
            </NextLink>
          </Box>
        )}{" "}
        {hasSubMenu && (
          <Box display="block" w="100%" dept={dept}>
            <Button
              colorScheme="gray.800"
              variant="link"
              onClick={() => handleSubmenuClick(menuName)}
            >
              {data.title}
              {isActive ? (
                <ChevronDownIcon ml="0.2rem" />
              ) : (
                <ChevronRightIcon ml="0.2rem" />
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
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UnorderedList display="flex" flexDir="column" listStyleType="none">
        {data.map((menu, index) => {
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
      {menus.map((menu, index) => {
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
