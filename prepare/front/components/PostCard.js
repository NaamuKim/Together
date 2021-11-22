import React, { useCallback, useState } from "react";
import { Avatar, Button, Card, Comment, Image, List, Popover } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  MessageTwoTone,
  RetweetOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import PropTypes from "prop-types";
import PostImages from "./PostImages";
import moment from "moment";
import "moment/locale/ko";
import styled from "@emotion/styled";
import CommentForm from "./CommentForm";
import { useDispatch, useSelector } from "react-redux";
import {
  LIKE_POST_REQUEST,
  REMOVE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
} from "../reducers/post";
import FollowButton from "./FollowButton";
import PostCardContent from "./PostCardContent";

const StyledDiv = styled.div`
  margin-bottom: 20px;
`;

moment.locale("ko");

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const id = useSelector((state) => state.user.me?.id);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const liked = post.likedUsers.find((v) => v._id === id);
  return (
    <StyledDiv>
      <Card
        cover={post.images[0] && <PostImages images={post.images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onUnlike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onLike} />
          ),
          commentFormOpened ? (
            <MessageTwoTone
              twoToneColor="#eb2f96"
              key="comment"
              onClick={onToggleComment}
            />
          ) : (
            <MessageOutlined key="comment" onClick={onToggleComment} />
          ),
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.writer.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button
                      type="danger"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={id && <FollowButton post={post} />}
      >
        <>
          <div style={{ float: "right" }}>
            {moment(post.createdAt).fromNow()}
          </div>
          <Card.Meta
            avatar={
              <Link href={`/user/${post.writer.id}`}>
                <a>
                  <Avatar>{post.writer.nickname[0]}</Avatar>
                </a>
              </Link>
            }
            title={post.writer.nickname}
            description={<PostCardContent postData={post.content} />}
          />
        </>

        <Image />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.writer.nickname}
                  avatar={<Avatar>item.writer.nickname</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </StyledDiv>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    writer: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
    images: PropTypes.arrayOf(PropTypes.string),
    likedUsers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
