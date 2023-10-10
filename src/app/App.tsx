import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { Navigator } from '../processes/navigator.tsx';

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

function App() {
  return (
    <ChakraProvider
    // theme={theme}
    >
      <Navigator />
    </ChakraProvider>
  );
}

export default App;
