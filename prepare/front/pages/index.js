import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../components/PostCard";
import {
  LOAD_MY_INFO_REQUEST,
  LOAD_USER_REQUEST,
  LOG_OUT_REQUEST,
} from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     dispatch({
  //       type: LOG_OUT_REQUEST,
  //     });
  //   }
  // });
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

  return (
    <>
      <Head>
        <title>Together</title>
      </Head>
      <AppLayout>
        <PostForm />
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const refreshToken = context.req
      ? context.req.headers.common["x-refresh-token"]
      : "";
    axios.defaults.headers.common["x-refresh-token"] = "";
    console.log(refreshToken);
    if (context.req && refreshToken) {
      axios.defaults.headers.common["x-refresh-token"] = refreshToken;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
