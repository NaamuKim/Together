import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../components/PostCard";
import { LOG_OUT_REQUEST } from "../reducers/user";

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

export default Home;
