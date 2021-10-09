import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect, useRef } from "react";

import useInput from "../hooks/useInput";

const PostForm = () => {
  const [text, onChangeText, setText] = useInput("");

  const onSubmit = useCallback(() => {}, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="오늘 유저님이 무슨 일이 있으셨는 지 궁금합니다"
      />
      <div>
        <input type="file" name="image" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          Together
        </Button>
      </div>
    </Form>
  );
};

export default PostForm;
