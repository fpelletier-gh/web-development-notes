import Navigation from "./navigation";
import { LogoSpan } from "./header";
import ActiveLink from "./ActiveLink";
import { useRef } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Button,
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
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex alignItems="center">
              <LogoSpan border="none">Web Dev</LogoSpan> Notes
              <Spacer />
              <Button bg="transparent" onClick={onClose}>
                <CloseIcon w={4} h={4} />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Container overflowY="auto">
              <Navigation menus={menuData} />
            </Container>
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="space-evenly">
            <ActiveLink href="/about" m="4" fontWeight="bold">
              About
            </ActiveLink>
            <ActiveLink href="/contact" m="4" fontWeight="bold">
              Contact
            </ActiveLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
