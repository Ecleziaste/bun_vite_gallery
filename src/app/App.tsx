import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { onSnapshot } from 'mobx-state-tree';

import { Navigator } from '../processes/navigator.tsx';
import { store } from '../shared/store/store.ts';

//TODO:
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };
//
// const darkTheme = extendTheme({ colors });

const App = observer(() => {
  onSnapshot(store, (snapshot) => {
    console.log('snapshot', snapshot);
  });

  return (
    <ChakraProvider
    // theme={theme}
    >
      <Navigator />
    </ChakraProvider>
  );
});

export default App;
