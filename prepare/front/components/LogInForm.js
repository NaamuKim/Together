import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import useInput from "../hooks/useinput";

const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmailDiv = styled.div`
  margin-bottom: 5px;
`;

const PasswordDiv = styled.div`
  outline: none;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  padding: 0 20px;
  margin-top: 10px;
  border: 1px solid lightgray;
  font-size: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Label = styled.label`
  color: white;
`;

const Button = styled.button`
  background: linear-gradient(to left, rgb(255, 77, 46), rgb(255, 155, 47));
  width: 100%;
  height: 35px;
  border: 0;
  outline: none;
  border-radius: 40px;
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
  cursor: pointer;
`;

const LogInForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {}, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <EmailDiv>
        <Label htmlFor="user-id">이메일</Label>
        <br />
        <Input
          name="user-id"
          value={email}
          onChange={onChangeEmail}
          type="email"
          required
        />
      </EmailDiv>
      <PasswordDiv>
        <Label htmlFor="user-password">비밀번호</Label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </PasswordDiv>
      <ButtonWrapper>
        <Button type="primary">로그인</Button>
        <Button>
          <Link href="signup">
            <a>회원가입</a>
          </Link>
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default LogInForm;
