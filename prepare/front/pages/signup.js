import React, { useCallback, useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "@emotion/styled";
import useInput from "../hooks/useinput";

const ErrorMessage = styled.div`
  color: darkred;
`;

const SubmitWrapper = styled.div`
  margin-top: 10px;
`;

const Label = styled.label`
  color: white;
`;

const InputStyle = styled(Input)`
  border-radius: 10px;
  height: 30px;
  padding: 0 20px;
  margin-top: 5px;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | Together</title>
      </Head>
      <Form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="user-email">이메일</Label>
          <br />
          <InputStyle
            name="user-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <Label htmlFor="user-nickname">닉네임</Label>
          <br />
          <InputStyle
            name="user-nickname"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <Label htmlFor="user-password">패스워드</Label>
          <br />
          <InputStyle
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <Label htmlFor="user-check-password">패스워드 확인</Label>
          <br />
          <InputStyle
            name="user-check-password"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            이용약관 확인 후 동의합니다.
          </Checkbox>
          {termError && (
            <ErrorMessage>약관 동의는 필수사항입니다.</ErrorMessage>
          )}
        </div>
        <SubmitWrapper>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </SubmitWrapper>
      </Form>
    </AppLayout>
  );
};

export default Signup;
