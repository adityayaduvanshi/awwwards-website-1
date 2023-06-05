import React from 'react';
import Layout from './Layout';
import HomeBanner from './components/homepage/HomeBanner';
import HomeFeature from './components/homepage/HomeFeature';
import HomeAbout from './components/homepage/HomeAbout';

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from './context/globalContext';
import HomeContent from './components/homepage/HomeContent';

import { GlobalProvider } from './context/globalContext';

const Wrapper = () => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeature onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </>
  );
};

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Wrapper />
      </Layout>
    </GlobalProvider>
  );
}

export default App;
