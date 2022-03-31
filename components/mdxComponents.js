import {
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
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import ActiveLink from "./ActiveLink";

const lightModeHeadingColor = "blue.600";
const darkModeHeadingColor = "blue.300";

function MdxHeadingXXLarge(props) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return <Heading color={headingColor} size="2xl" as="h1" {...props} />;
}

function MdxHeadingXLarge(props) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return <Heading color={headingColor} size="xl" as="h2" {...props} />;
}

function MdxHeadingLarge(props) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return <Heading color={headingColor} size="lg" as="h3" {...props} />;
}

function MdxHeadingMedium(props) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return <Heading color={headingColor} size="md" as="h4" {...props} />;
}

function MdxHeadingSmall(props) {
  const headingColor = useColorModeValue(
    lightModeHeadingColor,
    darkModeHeadingColor
  );
  return (
    <Heading color={headingColor} size="sm" py="0.5rem" as="h5" {...props} />
  );
}

function MdxText(props) {
  return <Text {...props} />;
}

function MdxCode(props) {
  return <Code {...props} />;
}

export const components = {
  a: ActiveLink,
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
