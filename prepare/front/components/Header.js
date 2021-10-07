import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

const NavStyle = styled.nav`
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #017374;
  z-index: 10;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const TogetherDiv = styled.div`
  padding-left: 10px;
  font-size: 18px;
  :hover {
    font-size: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    align-items: center;
  }
`;

const Item = styled.li`
  width: 80px;
  border-bottom: 5px solid transparent;
  transition: border-bottom.5s ease-in-out;
  display: flex;
  justify-content: center;
  padding: 8px 12px;
  align-items: center;
  &:hover {
    background-color: #d49466;
    border-radius: 7px;
  }
`;

const MenuContent = styled.span`
  cursor: pointer;
`;

const Home = styled.span`
  cursor: pointer;
  padding-left: 5px;
`;

const Header = () => {
  return (
    <NavStyle>
      <TogetherDiv>
        <FontAwesomeIcon icon={faGlobeAsia} color="#D0FEFE" />
        <Link href="/">
          <Home>Together</Home>
        </Link>
      </TogetherDiv>
      <List>
        <Item>
          <Link href="/profile">
            <MenuContent>프로필</MenuContent>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <MenuContent>커뮤니티</MenuContent>
          </Link>
        </Item>
        <Item>
          <Link href="/signup">
            <MenuContent>회원가입</MenuContent>
          </Link>
        </Item>
      </List>
    </NavStyle>
  );
};

export default Header;
