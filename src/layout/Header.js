import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Menu } from '../img/menu.svg';
import Nav from './Nav';

const Header = () => {
    return (
        <HeaderBox>
            <Nav icon={<Menu />} />
        </HeaderBox>
    );
};

export default Header;

const HeaderBox = styled.header`
    width: 100%;
    height: 60px;
    background: #fff;
    color: #fff;
    padding: 0 16px 0 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;
