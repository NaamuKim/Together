import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import useInput from "../hooks/useInput";

const CommentForm = ({ post }) => {
  const [commentText, onChangeCommentText, setCommentText] = useInput("");

  const onSubmitComment = useCallback(() => {
    console.log(commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button type="primary" htmlType="submit">
          ✔
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
