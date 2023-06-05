import Layout from './Layout';
import HomeBanner from './components/homepage/HomeBanner';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from './context/globalContext';

import { GlobalProvider } from './context/globalContext';

const Wrapper = () => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <div>
      <HomeBanner onCursor={onCursor} />
    </div>
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
