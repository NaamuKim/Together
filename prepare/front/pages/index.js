import React from "react";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Together</title>
      </Head>
      <AppLayout>
        <PostForm />
      </AppLayout>
    </>
  );
};

export default Home;
