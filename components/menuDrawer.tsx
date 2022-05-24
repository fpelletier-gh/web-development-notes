import Navigation from "./navigation";
import { LogoWithoutLink as Logo } from "./logo";
import ActiveLink from "./activeLink";
import { useRef } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Container,
  Flex,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "./footer";

export default function MenuDrawer({ menuData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      <Button
        ref={btnRef}
        display={{ base: "block", md: "none" }}
        alignSelf="center"
        onClick={onOpen}
        p="2"
        variant="outline"
        border="none"
      >
        <HamburgerIcon h="100%" w="100%" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex alignItems="center">
              <Logo />
              <Spacer />
              <Button bg="transparent" onClick={onClose}>
                <CloseIcon w={4} h={4} />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Container overflowY="auto">
              <Navigation menus={menuData} onClose={onClose} />
              <UnorderedList listStyleType="none">
                <ListItem w="100%">
                  <ActiveLink
                    href="/about"
                    fontWeight="semibold"
                    fontSize={["2xl", "md"]}
                  >
                    <Box w="100%">About</Box>
                  </ActiveLink>
                </ListItem>
                <ListItem>
                  <ActiveLink
                    href="/contact"
                    fontWeight="semibold"
                    fontSize={["2xl", "md"]}
                  >
                    <Box w="100%">Contact</Box>
                  </ActiveLink>
                </ListItem>
              </UnorderedList>
            </Container>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            justifyContent="center"
            mt={5}
            pb="2.2rem"
            pt="0px"
            borderTop="1px solid"
            borderColor={borderColor}
          >
            <Footer border="none" mt={0} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
