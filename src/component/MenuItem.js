import React from 'react';
import styled from "styled-components";
import MenuList from './MenuList';

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
}

export default MenuList;