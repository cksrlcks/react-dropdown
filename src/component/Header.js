import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Menu } from "../img/menu.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <Nav icon={<Menu />} />
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  height: 60px;
  background: #333;
  color: #fff;
  padding: 0 16px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
