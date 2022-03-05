import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button, useColorMode } from "@chakra-ui/react";

const name = "Web Development Notes";
export const siteTitle = "Web Development Notes";

export default function Layout({ children, home }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Web Development Notes"
          content="Useful note about web development"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <h1>{name}</h1>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <main>{children}</main>
    </div>
  );
}
