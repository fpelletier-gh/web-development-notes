import Navigation from "./navigation";
import { LogoWithoutLink as Logo } from "./logo";
import ActiveLink from "./activeLink";
import { useRef } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
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
        display={{ base: "block", lg: "none" }}
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
        size="sm"
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
            </Container>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            flexDir="column"
            justifyContent="center"
            pt="0px"
            borderTop="1px solid"
            borderColor={borderColor}
          >
            <Flex justifyContent="space-evenly" w="100%" pt={2}>
              <ActiveLink
                href="/about"
                fontWeight="semibold"
                fontSize={["xl", "md"]}
              >
                <Box w="100%">About</Box>
              </ActiveLink>
              <ActiveLink
                href="/contact"
                fontWeight="semibold"
                fontSize={["xl", "md"]}
              >
                <Box w="100%">Contact</Box>
              </ActiveLink>
            </Flex>
            <Footer border="none" mt={0} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
