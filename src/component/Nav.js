import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Nav = (props) => {
  const NavBody = useRef();
  const [open, setOpen] = useState(false);
  const MenuOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (NavBody.current && !NavBody.current.contains(e.target)) {
        setOpen(false);
      }
    });
  }, []);
  return (
    <NavBox ref={NavBody}>
      <Button onClick={MenuOpen} className={open && "on"}>
        {props.icon}
      </Button>
      {open && <MenuList />}
    </NavBox>
  );
};
const MenuList = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const MenuItem = (props) => {
    function menuChange() {
      if (props.name) {
        setActiveMenu(props.name);
      }
    }
    return (
      <li>
        <a href="#" onClick={menuChange}>
          {props.children}
        </a>
      </li>
    );
  };
  return (
    <Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        classNames="depth1"
      >
        <ul className="menu">
          <MenuItem name="menu1">About</MenuItem>
          <MenuItem name="menu2">Beverage</MenuItem>
          <MenuItem name="menu3">Contact</MenuItem>
        </ul>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "menu1"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        classNames="depth2"
      >
        <ul className="menu">
          <MenuItem name="main">뒤로가기</MenuItem>
          <MenuItem>메뉴1</MenuItem>
          <MenuItem>메뉴2</MenuItem>
          <MenuItem>메뉴3</MenuItem>
        </ul>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "menu2"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        classNames="depth2"
      >
        <ul className="menu">
          <MenuItem name="main">뒤로가기</MenuItem>
          <MenuItem>메뉴1</MenuItem>
          <MenuItem>메뉴2</MenuItem>
          <MenuItem>메뉴3</MenuItem>
        </ul>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "menu3"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        classNames="depth2"
      >
        <ul className="menu">
          <MenuItem name="main">뒤로가기</MenuItem>
          <MenuItem>서메뉴1</MenuItem>
          <MenuItem>메ㄸ뉴2</MenuItem>
          <MenuItem>서메뉴1</MenuItem>
          <MenuItem>메ㄸ뉴2</MenuItem>
          <MenuItem>서메뉴1</MenuItem>
          <MenuItem>메ㄸ뉴2</MenuItem>
        </ul>
      </CSSTransition>
    </Dropdown>
  );
};

export default Nav;
const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 20px;
  background: #444;
  width: 300px;
  border-radius: 8px;
  transition: height 500ms ease;
  overflow: hidden;
`;
const NavBox = styled.nav`
  ul {
    width: 300px;
    padding: 0.5em 0;
    box-sizing: border-box;

    li {
      padding: 0.2em 0.8em;
      a {
        color: #fff;
        font-size: 14px;
        padding: 1em 1.5em;
        background: #444;
        display: block;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        &:hover {
          background: #666;
        }
      }
    }
  }
`;
const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  position: relative;

  &.on svg {
    opacity: 0.2;
  }
  svg {
    transition: opacity 0.2s;
    position: relative;
  }
`;
