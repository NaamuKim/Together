import React, { useCallback, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faBars } from "@fortawesome/free-solid-svg-icons";

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
  box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 8px 8px;
  }
`;

const TogetherDiv = styled.div`
  padding-left: 10px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-bottom: 10px;
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
    display: ${({ openedMenu }) => (openedMenu ? "none" : "flex")};
  } ;
`;

const Item = styled.li`
  width: 100px;
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
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    &:hover {
      border-radius: 5px;
    }
  }
`;

const MenuContent = styled.span`
  cursor: pointer;
`;

const Home = styled.span`
  cursor: pointer;
  padding-left: 5px;
`;

const Menu = styled.a`
  display: none;
  position: absolute;
  left: 10px;
  font-size: 20px;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const onCLickMenu = useCallback(() => {
    setOpenedMenu((prev) => !prev);
  }, []);
  return (
    <NavStyle>
      <TogetherDiv>
        <Link href="/">
          <Home>
            <FontAwesomeIcon icon={faGlobeAsia} color="#D0FEFE" />
            Together
          </Home>
        </Link>
      </TogetherDiv>
      <List openedMenu={openedMenu}>
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

      <Menu href="#" onClick={onCLickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
    </NavStyle>
  );
};

export default Header;
