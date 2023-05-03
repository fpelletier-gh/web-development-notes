import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  UnorderedList,
  ListItem,
  Divider,
  Heading,
  Code,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  HeadingProps,
  OmitCommonProps,
  TextProps,
  CodeProps,
  Button,
  useDisclosure,
  Flex,
  useColorModeValue,
  Box,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import ActiveLink from "./activeLink";

const lightModeHeadingColor = "blue.600";
const darkModeHeadingColor = "blue.300";

function MdxHeadingXXLarge(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  return <Heading pt="4rem" pb="1rem" size="xl" as="h1" {...props} />;
}

function MdxHeadingXLarge(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  return <Heading pt="2rem" pb="1rem" size="lg" as="h2" {...props} />;
}

function MdxHeadingLarge(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  return <Heading pt="2rem" pb="1rem" size="md" as="h3" {...props} />;
}

function MdxHeadingMedium(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  return <Heading pt="2rem" pb="1rem" size="md" as="h4" {...props} />;
}

function MdxHeadingSmall(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  return <Heading pt="2rem" pb="1rem" size="sm" py={2} as="h5" {...props} />;
}

function MdxText(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >,
      keyof TextProps
    > &
    TextProps & { as?: "p" }
) {
  return <Text {...props} />;
}

function MdxCode(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      keyof CodeProps
    > &
    CodeProps & { as?: "code" }
) {
  return <Code px="2" {...props} />;
}

function MdxListItem(props) {
  return <ListItem listStyleType="none" {...props} />;
}

function MdxUnorderedList(props) {
  return <UnorderedList {...props} />;
}

function Toc({ children, ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="50%" display="inline-block">
        <Button p="0px" variant="transparent" onClick={onOpen}>
          <MdxHeadingLarge borderBottom="3px solid" my="0px" py="0px">
            Table of contents
          </MdxHeadingLarge>
        </Button>
      </Flex>
      <Flex
        display="inline-block"
        w="50%"
        top="5rem"
        mt="0px"
        py={4}
        pr={2}
        position="sticky"
        textAlign="right"
        zIndex="5"
      >
        <Tooltip hasArrow label="Table of contents" placement="top">
          <Button mt="0px" variant="transparent" onClick={onOpen}>
            <HamburgerIcon w={6} h={6} />
          </Button>
        </Tooltip>
      </Flex>
      <Drawer
        blockScrollOnMount={false}
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex alignItems="center">
              Table of contents
              <Spacer />
              <Button bg="transparent" onClick={onClose}>
                <CloseIcon w={4} h={4} />
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box py={3} overflowY="auto">
              {children}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function MdxBlockquote({ children, ...props }) {
  const borderColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <Box
      as="blockquote"
      border="none"
      borderLeft="4px solid"
      borderColor={borderColor}
      color={color}
      pl={3}
      pt={1}
      mb={6}
      mt={1}
      fontStyle="italic"
      {...props}
    >
      {children}
    </Box>
  );
}

export const components = {
  a: ActiveLink,
  ul: MdxUnorderedList,
  li: MdxListItem,
  h1: MdxHeadingXXLarge,
  h2: MdxHeadingXLarge,
  h3: MdxHeadingLarge,
  h4: MdxHeadingMedium,
  h5: MdxHeadingSmall,
  p: MdxText,
  blockquote: MdxBlockquote,
  code: MdxCode,
  table: Table,
  tr: Tr,
  td: Td,
  th: Th,
  caption: TableCaption,
  thead: Thead,
  tbody: Tbody,
  tfoot: Tfoot,
  Code,
  Divider,
  Toc,
};
