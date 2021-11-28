import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";

const ErrorMessage = styled.div`
  color: darkred;
`;

const SubmitWrapper = styled.div`
  margin-top: 10px;
`;

const Label = styled.label`
  color: #070d0d;
`;

const InputStyle = styled(Input)`
  border-radius: 10px;
  height: 30px;
  padding: 0 20px;
  margin-top: 5px;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (me && me.id) {
      Router.replace("/");
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);

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
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | Together</title>
      </Head>
      <Form onFinish={onSubmit}>
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
            together 시스템 사용 정책에 동의합니다.
          </Checkbox>
          {termError && (
            <ErrorMessage>약관 동의는 필수사항입니다.</ErrorMessage>
          )}
        </div>
        <SubmitWrapper>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </SubmitWrapper>
      </Form>
    </AppLayout>
  );
};

export default Signup;
