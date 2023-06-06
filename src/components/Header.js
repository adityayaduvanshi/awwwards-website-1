import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav, Menu, Logo } from '../styles/headerStyles';
import { Container, Flex } from '../styles/globalStyles';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../context/globalContext';
import useElementPosition from '../hooks/useElementPositon';

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  setHamburgerPostion,
  hamburgerPosition,
}) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
  };
  const menuHover = () => {
    onCursor('locked');
    setHamburgerPostion({ x: position.x, y: position.y + 72 });
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 30 }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu
            onMouseEnter={menuHover}
            ref={hamburger}
            onMouseLeave={onCursor}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
