import ActiveLink from "./activeLink";
import { BsDot } from "react-icons/bs";
import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navigation({ menus, onClose = () => {} }) {
  const [activeMenus, setActiveMenus] = useState([]);
  const borderColor = useColorModeValue("gray.300", "gray.600");

  useEffect(() => {
    const sessionStorageActiveMenus = sessionStorage.getItem("activeMenus");
    if (sessionStorageActiveMenus) {
      setActiveMenus(JSON.parse(sessionStorageActiveMenus));
    }
  }, []);

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
    sessionStorage.setItem("activeMenus", JSON.stringify(newActiveMenus));
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => {
    const isActive = activeMenus.includes(menuName);

    return (
      <ListItem pt={1}>
        {!hasSubMenu && (
          <Box display="flex" alignItems="center" w="100%">
            <Icon as={BsDot} py={[2, 1]} h="100%" />
            <ActiveLink
              href={`/posts/${data.url}`}
              fontWeight="normal"
              onClick={onClose}
              w={"100%"}
              fontSize={["xl", "md"]}
              lineHeight="1.1rem"
              py={[2, 1]}
            >
              {data.title}
            </ActiveLink>
          </Box>
        )}
        {hasSubMenu && (
          <Box display="flex" alignItems="center" w="100%" py={1}>
            {isActive ? (
              <ChevronDownIcon
                mr={1}
                onClick={() => handleSubmenuClick(menuName)}
              />
            ) : (
              <ChevronRightIcon
                mr={1}
                onClick={() => handleSubmenuClick(menuName)}
              />
            )}
            <Button
              display="block"
              colorScheme="gray.800"
              fontSize={["xl", "md"]}
              w="100%"
              whiteSpace="normal"
              textAlign="left"
              variant="link"
              py={1}
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
        pl={2}
        marginInlineStart="0.5em"
        borderLeft="1px solid black"
        borderColor={borderColor}
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
