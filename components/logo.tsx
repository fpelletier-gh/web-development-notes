import NextLink from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  ChakraProps,
  OmitCommonProps,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { chakra, Heading } from "@chakra-ui/react";

export function LogoSpan(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
      keyof ChakraProps
    > &
    ChakraProps & { as?: "span" }
) {
  const color = useColorModeValue("blue.600", "blue.300");
  return (
    <chakra.span
      as="span"
      color={color}
      borderColor={color}
      borderWidth="2px"
      borderRadius="md"
      px="0.3rem"
      {...props}
    />
  );
}

export function LogoWithoutLink() {
  return (
    <Heading
      as="h1"
      variant="base"
      fontSize={{ base: "xl", md: "2xl" }}
      my={4}
      mx={2}
    >
      <LogoSpan>Web Dev</LogoSpan> Notes
    </Heading>
  );
}

export default function Logo() {
  return (
    <Heading
      as="h1"
      variant="base"
      fontSize={{ base: "xl", md: "2xl" }}
      my={4}
      mx={2}
    >
      <NextLink href="/" passHref>
        <Link variant="logo">
          <LogoSpan>Web Dev</LogoSpan> Notes
        </Link>
      </NextLink>
    </Heading>
  );
}
