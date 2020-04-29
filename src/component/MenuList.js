import React , { useState, useEffect, useRef }from 'react';
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import {ReactComponent as AboutIcon} from '../img/icons/chat.svg';
import {ReactComponent as CupIcon} from '../img/icons/cup.svg';
import {ReactComponent as ContactIcon} from '../img/icons/envelope.svg';
import {ReactComponent as BackIcon} from '../img/icons/arrow-left.svg';
import {ReactComponent as Icon01} from '../img/icons/bottle.svg';
import {ReactComponent as Icon02} from '../img/icons/calendar.svg';
import {ReactComponent as Icon03} from '../img/icons/camera.svg';
import {ReactComponent as Icon04} from '../img/icons/badge.svg';
import {ReactComponent as Icon05} from '../img/icons/bag.svg';
import {ReactComponent as Icon06} from '../img/icons/bulb.svg';
import {ReactComponent as Icon07} from '../img/icons/card.svg';
import {ReactComponent as Icon08} from '../img/icons/thunder.svg';
import {ReactComponent as Icon09} from '../img/icons/sun.svg';

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
            <span className="menu_icon">{props.icon}</span>
            <span className="menu_name">{props.children}</span>            
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
            <MenuItem name="menu1" icon={<AboutIcon/>}>About</MenuItem>
            <MenuItem name="menu2" icon={<CupIcon/>}>Beverage</MenuItem>
            <MenuItem name="menu3" icon={<ContactIcon/>}>Contact</MenuItem>
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
            <MenuItem name="main" icon={<BackIcon/>}>뒤로가기</MenuItem>
            <MenuItem icon={<Icon01 />}>메뉴1</MenuItem>
            <MenuItem icon={<Icon02 />}>메뉴2</MenuItem>
            <MenuItem icon={<Icon03 />}>메뉴3</MenuItem>
            <MenuItem icon={<Icon04 />}>메뉴3</MenuItem>
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
          <MenuItem name="main" icon={<BackIcon/>} >뒤로가기</MenuItem>
            <MenuItem icon={<Icon05 />}>메뉴1</MenuItem>
            <MenuItem icon={<Icon06 />}>메뉴2</MenuItem>
            <MenuItem icon={<Icon07 />}>메뉴3</MenuItem>
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
            <MenuItem name="main" icon={<BackIcon/>} >뒤로가기</MenuItem>
            <MenuItem icon={<Icon08 />}>메뉴1</MenuItem>
            <MenuItem icon={<Icon09 />}>메뉴2</MenuItem>
          </ul>
        </CSSTransition>
      </Dropdown>
    );
}

export default MenuList;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 20px;
  background: #fff;
  width: 300px;
  border-radius: 8px;
  transition: height 500ms ease;
  overflow: hidden;
  z-index:4;
  box-shadow: 0px 8px 52px 1px rgba(0,0,0,0.1);

  ul {
    width: 300px;
    padding: 0.5em 0;
    box-sizing: border-box;

    li {
      padding: 0.2em 0.8em;
      a {
        font-size: 14px;
        padding: 1em;
        width: 100%;
        box-sizing: border-box;
        display:flex;
        align-items:center;

            span{
                display:block;
            }

            .menu_icon{
                width:40px;
                height:40px;
                background:#f8f8f8;
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:20px;

                svg{
                    width:28px;
                    height:28px;
                }
            }

        }
    }    
  }

  .depth1-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .depth1-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .depth1-exit {
    position: absolute;
  }
  .depth1-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }
  
  .depth2-enter {
    transform: translateX(110%);
  }
  .depth2-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .depth2-exit {
  }
  .depth2-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`;