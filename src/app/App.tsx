import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { onSnapshot } from 'mobx-state-tree';

import { store } from '../entities';
import { Navigator } from '../processes/navigator.tsx';

const App = observer(() => {
  onSnapshot(store, (snapshot) => {
    console.log('snapshot', snapshot);
  });

  return (
    <ChakraProvider resetCSS={true}>
      <Navigator />
    </ChakraProvider>
  );
});

export default App;
