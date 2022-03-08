import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
export default function Navigation({ allPostsData }) {
  console.log("Navigation ----> ", allPostsData);
  return (
    <nav>
      <ul>
        {allPostsData.map(({ id, slug, title }) => (
          <li key={id}>
            <NextLink href={`/posts/${slug}`} passHref>
              <Link>{title}</Link>
            </NextLink>
            <br />
          </li>
        ))}
      </ul>
    </nav>
  );
}
