import {
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
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
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
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return (
    <Heading
      color={headingColor}
      pt="4rem"
      pb="1rem"
      size="xl"
      as="h1"
      {...props}
    />
  );
}

function MdxHeadingXLarge(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return (
    <Heading
      color={headingColor}
      pt="2rem"
      pb="1rem"
      size="lg"
      as="h2"
      {...props}
    />
  );
}

function MdxHeadingLarge(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return (
    <Heading
      color={headingColor}
      pt="2rem"
      pb="1rem"
      size="md"
      as="h3"
      pb={4}
      {...props}
    />
  );
}

function MdxHeadingMedium(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return (
    <Heading
      color={headingColor}
      pt="2rem"
      pb="1rem"
      size="md"
      as="h4"
      {...props}
    />
  );
}

function MdxHeadingSmall(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" }
) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return (
    <Heading
      color={headingColor}
      pt="2rem"
      pb="1rem"
      size="sm"
      py={2}
      pt={6}
      as="h5"
      {...props}
    />
  );
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
  return <Code {...props} />;
}

function MdxListItem(props) {
  return <ListItem {...props} />;
}

function MdxUnorderedList(props) {
  return <UnorderedList {...props} />;
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
};
