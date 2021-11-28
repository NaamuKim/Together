import React, { useEffect } from "react";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import { Card, Avatar } from "antd";
import PostCard from "../../components/PostCard";
import { LOAD_USER_POSTS_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from "../../reducers/user";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/AppLayout";
import cookie from "cookie";
import styled from "@emotion/styled";

const UserCard = styled(Card)`
  margin-bottom: 20px;
`;

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);

  return (
    <AppLayout>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
          <meta
            name="description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:title"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:image"
            content="https://nodebird.com/favicon.ico"
          />
          <meta
            property="og:url"
            content={`http://localhost:3000/user/${id}`}
          />
        </Head>
      )}

      {userInfo ? (
        <UserCard
          actions={[
            <div key="twit">
              투게더
              <br />
              {userInfo.postCount}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.followingsCount}
            </div>,
            <div key="followers">
              팔로워
              <br />
              {userInfo.followersCount}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
          />
        </UserCard>
      ) : null}

      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const parsedCookie = context.req
      ? cookie.parse(context.req.headers.cookie || "")
      : "";
    if (context.req && parsedCookie) {
      if (parsedCookie["accessToken"]) {
        context.store.dispatch({
          type: LOAD_MY_INFO_REQUEST,
          data: parsedCookie["accessToken"],
        });
      }
    }
    context.store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default User;
