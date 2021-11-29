import React, { useCallback } from "react";
import { Avatar, Comment, List } from "antd";
import styled from "@emotion/styled";
import { REMOVE_COMMENT_REQUEST } from "../reducers/post";
import { useDispatch, useSelector } from "react-redux";

const DeleteSpan = styled.span`
  margin-bottom: 20px;
  float: right;
  cursor: pointer;
  :hover {
    color: #000;
  }
`;

const CommentCard = ({ comments }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const onRemoveComment = useCallback(
    (commentId) => () => {
      dispatch({
        type: REMOVE_COMMENT_REQUEST,
        data: commentId,
      });
    },
    []
  );
  return (
    <List
      header={`${comments.length}개의 댓글`}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => {
        const isMyComment = comments.find((v) => v.writer._id === id);
        return (
          <List.Item
            actions={
              isMyComment === item
                ? [
                    <DeleteSpan
                      key={comments._id}
                      onClick={onRemoveComment(item._id)}
                    >
                      삭제
                    </DeleteSpan>,
                  ]
                : null
            }
          >
            <Comment
              author={item.writer.nickname}
              avatar={<Avatar>{item.writer.nickname}</Avatar>}
              content={item.comment}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default CommentCard;
