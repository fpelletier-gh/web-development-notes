import ActiveLink from "../components/ActiveLink";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  GridItem,
} from "@chakra-ui/react";

function CreateNavigationList({ menus }) {
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
    const blue = useColorModeValue("blue.600", "blue.300");

    return (
      <ListItem>
        {!hasSubMenu && (
          <Box
            display="block"
            borderLeft="2px solid"
            borderColor={blue}
            w="100%"
            dept={dept}
          >
            <ActiveLink
              href={`/posts/${data.url}`}
              fontWeight="semibold"
              w={"100%"}
              pl="2"
            >
              {data.title}
            </ActiveLink>
          </Box>
        )}{" "}
        {hasSubMenu && (
          <Box display="block" w="100%" py="0.3rem" dept={dept}>
            <Button
              colorScheme="gray.800"
              size="lg"
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

export default function Navigation({ menus }) {
  return (
    <GridItem as="nav" colSpan={2} py={1} w="100%">
      <CreateNavigationList menus={menus} />
    </GridItem>
  );
}
