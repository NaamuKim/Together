import React, { useCallback, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faBars } from "@fortawesome/free-solid-svg-icons";
import useInput from "../hooks/useInput";

const NavStyle = styled.nav`
  color: #070d0d;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #fdfdfe;
  z-index: 10;
  box-shadow: 1px 2px #baddf9;
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
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
  background-color: #baddf9;
  ::selection {
    background: #fff;
  }
  &:hover {
    border-radius: 5px;
    border-color: #fff;
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
  width: 100%;
  border-bottom: 5px solid transparent;
  transition: border-bottom.5s ease-in-out;
  display: flex;
  justify-content: center;
  margin: 8px;
  align-items: center;
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
  padding: 10px 6px;
  &:hover {
    background-color: #fddc5c;
    border-radius: 7px;
  }
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
  const [searchInput, onChangeSearchInput] = useInput("");
  const onCLickMenu = useCallback(() => {
    setOpenedMenu((prev) => !prev);
  }, []);
  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <NavStyle>
      <TogetherDiv>
        <Link href="/">
          <Home>
            <FontAwesomeIcon icon={faGlobeAsia} color="#070D0D" />
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
          <Link href="/signup">
            <MenuContent>회원가입</MenuContent>
          </Link>
        </Item>
        <Item>
          <SearchInput
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Item>
      </List>

      <Menu href="#" onClick={onCLickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
    </NavStyle>
  );
};

export default Header;
