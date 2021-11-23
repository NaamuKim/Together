import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Form, Input } from "antd";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";

const NicknameWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  const dispatch = useDispatch();
  const [nickname, onChangeNickname] = useInput("");
  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);
  return (
    <NicknameWrapper>
      <Input.Search
        value={nickname}
        onChange={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
      />
    </NicknameWrapper>
  );
};

export default NicknameEditForm;
