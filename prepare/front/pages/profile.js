import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "나무" },
    { nickname: "치즈라떼" },
    { nickname: "대형곰" },
  ];
  const followingList = [
    { nickname: "나무" },
    { nickname: "치즈라떼" },
    { nickname: "대형곰" },
  ];
  return (
    <>
      <Head>
        <title>프로필 | Together </title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워" data={followerList} />
      </AppLayout>
    </>
  );
};
export default Profile;
