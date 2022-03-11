import NextLink from "next/link";
import { Link, GridItem, UnorderedList, ListItem } from "@chakra-ui/react";
export default function Navigation({ allPostsData }) {
  console.log("Navigation ----> ", allPostsData);
  return (
    <GridItem as="nav" colSpan={1} p={2} w="100%" borderRight="1px solid black">
      <UnorderedList listStyleType="none" p={0} m={0}>
        {allPostsData.map(({ id, slug, title }) => (
          <ListItem key={id}>
            <NextLink href={`/posts/${slug}`} passHref>
              <Link>{title}</Link>
            </NextLink>
            <br />
          </ListItem>
        ))}
      </UnorderedList>
    </GridItem>
  );
}
