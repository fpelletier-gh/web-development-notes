import Head from "next/head";
import { GetStaticProps } from "next";
import { useState } from "react";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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

export default function Contact({ menuData }) {
  const [isMessageSent, setMessageSent] = useState(false);
  const [isMessageError, setMessageError] = useState(false);

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

  function validateMessage(value: any) {
    let error: string;

    if (!value) {
      error = "Required";
    }

    return error;
  }

  function handleSubmit(values, actions) {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      actions.setSubmitting(false);
      actions.resetForm({ values: "" });
      if (res.status === 200) {
        setMessageSent(true);
      } else {
        setMessageError(true);
        console.log(res.status);
        console.log(JSON.stringify(values));
      }
    });
  }

  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Flex as="main" direction="column" alignItems={"stretch"} w="100%">
        <Alert
          status="success"
          display={isMessageSent ? "flex" : "none"}
          textAlign="center"
          flexDirection={["column", "row"]}
          alignItems={["center", "left"]}
          justifyContent={["center"]}
        >
          <AlertIcon />
          <AlertTitle my={[1, 0]}>Message sent!</AlertTitle>
          <AlertDescription>
            Thanks for sending me a message. I'll get back to you soon.
          </AlertDescription>
        </Alert>
        <Alert
          status="error"
          display={isMessageError ? "flex" : "none"}
          textAlign="center"
          flexDirection={["column", "row"]}
          alignItems={["center", "left"]}
          justifyContent={["center"]}
        >
          <AlertIcon />
          <AlertTitle my={[1, 0]}>Someting went wrong!</AlertTitle>
          <AlertDescription>Please try again</AlertDescription>
        </Alert>
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
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              <VStack spacing={4} align="center" m="auto" maxW="40rem">
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
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
