import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect, useRef } from "react";

import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");

  const onSubmit = useCallback(() => {
    if (!text || text.trim()) {
      return alert("게시글을 작성하세요.");
    }
    return dispatch({ type: ADD_POST_REQUEST, data: data });
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);
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
