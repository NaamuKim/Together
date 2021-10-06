import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

const DivStyle = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 10;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom.5s ease-in-out;
`;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <DivStyle>
      <List>
        <Item>
          <Link href="/">
            <Slink>투게더</Slink>
          </Link>
        </Item>
        <Item>
          <Link href="/profile">
            <Slink>프로필</Slink>
          </Link>
        </Item>
        <Item>
          <Link href="/signup">
            <Slink>회원가입</Slink>
          </Link>
        </Item>
      </List>
    </DivStyle>
  );
};

export default Header;
