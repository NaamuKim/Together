import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";
import cookie from "react-cookies";

const ProfileCard = styled(Card)`
  background-color: #fdfdfe;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
      data: cookie.load("refreshToken"),
    });
  }, []);

  return (
    <ProfileCard
      actions={[
        <div key="posts">
          <Link href={`/user/${me.id}`}>
            <a>
              게시물
              <br />
              {me.posts.length}
            </a>
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            <a>
              팔로잉
              <br />
              {me.followings.length}
            </a>
          </Link>
        </div>,
        <div key="followers">
          <Link href="/profile">
            <a>
              팔로워
              <br />
              {me.followers.length}
            </a>
          </Link>
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Link href={`/user/${me.id}`}>
            <a>
              <Avatar>{me.nickname[0]}</Avatar>
            </a>
          </Link>
        }
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </ProfileCard>
  );
};

export default UserProfile;
