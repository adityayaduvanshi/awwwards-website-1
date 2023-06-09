import React, { useState } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import normalize from 'styled-normalize';
import Header from './components/Header';
import CustomCursor from './components/customCursor';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from './context/globalContext';
import Navigation from './components/navigation';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
cursor: none;

}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  
  
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${(props) => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}

`;

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const [hamburgerPosition, setHamburgerPostion] = useState({
    x: 0,
    y: 0,
  });

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };
  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />

      <Header
        hamburgerPosition={hamburgerPosition}
        setHamburgerPostion={setHamburgerPostion}
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  );
};

export default Layout;
