import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Form, Input } from "antd";
import useInput from "../hooks/useinput";

const NicknameWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  const [nickname, onChangeNickname] = useInput("");
  const onSubmit = useCallback(() => {}, []);
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
