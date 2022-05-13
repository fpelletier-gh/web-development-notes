import Head from "next/head";
import useSWR from "swr";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import {
  Flex,
  Box,
  VStack,
  Heading,
  Button,
  Textarea,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Contact({ menuData }) {
  function validateName(value: any) {
    let error: string;

    if (!value) {
      error = "Required";
    }

    return error;
  }

  function validateEmail(value: any) {
    let error: string;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  function validateSubject(value: any) {
    let error: string;

    if (!value) {
      error = "Required";
    }

    return error;
  }

  function validateMessage(value: any) {
    let error: string;

    if (!value) {
      error = "Required";
    }

    return error;
  }

  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Flex as="main" direction="column" alignItems={"stretch"} w="100%">
        <Heading as="h2" size="xl" my={6} textAlign="center">
          Contact me
        </Heading>
        <Heading
          as="h5"
          size="sm"
          mb={8}
          fontWeight="semibold"
          textAlign="center"
        >
          Have a question or want to work together?
        </Heading>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <VStack spacing={4} align="center" m="auto" maxW="40rem">
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                      // w={[null, "35rem", "35rem", "40rem"]}
                    >
                      <Input {...field} id="name" w="100%" placeholder="Name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email" validate={validateEmail}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input {...field} id="email" placeholder="Email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="subject" validate={validateSubject}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.subject && form.touched.subject}
                    >
                      <Input {...field} id="subject" placeholder="Subject" />
                      <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="message" validate={validateMessage}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Your message"
                        size="lg"
                        minH="15rem"
                        resize="vertical"
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Box>
                  <Button
                    variant="submit"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Box>
              </VStack>
            </Form>
          )}
        </Formik>
      </Flex>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = getMenuData();
  return {
    props: {
      menuData,
    },
  };
};
