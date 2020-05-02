import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MenuList from '../component/MenuList';

const Nav = (props) => {
    const NavBody = useRef();
    const [open, setOpen] = useState(false);

    const MenuOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (NavBody.current && !NavBody.current.contains(e.target)) {
                setOpen(false);
            }
        });
    }, []);

    return (
        <nav ref={NavBody}>
            <Button onClick={MenuOpen} className={open && 'on'}>
                {props.icon}
            </Button>
            {open && <MenuList />}
        </nav>
    );
};

export default Nav;

const Button = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    position: relative;
    &:after {
        content: '';
        display: block;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        opacity: 0;
        transition: all 0.2s;
    }
    &:hover:after {
        opacity: 1;
    }
    &.on:after {
        opacity: 1;
        background: rgba(255, 255, 255, 0.05);
    }
    &.on svg {
        opacity: 0.2;
    }
    svg {
        transition: opacity 0.2s;
        position: relative;
        z-index: 2;
    }
`;
