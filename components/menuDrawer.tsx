import Navigation from "./navigation";
import Logo, { LogoSpan } from "./logo";
import ActiveLink from "./activeLink";
import { useRef } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
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
} from "@chakra-ui/react";
import Footer from "./footer";

export default function MenuDrawer({ menuData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
                <ListItem>
                  <ActiveLink
                    href="/about"
                    fontWeight="semibold"
                    fontSize={["xl", "md"]}
                  >
                    About
                  </ActiveLink>
                </ListItem>
                <ListItem>
                  <ActiveLink
                    href="/contact"
                    fontWeight="semibold"
                    fontSize={["xl", "md"]}
                  >
                    Contact
                  </ActiveLink>
                </ListItem>
              </UnorderedList>
            </Container>
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="center">
            <Footer />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
