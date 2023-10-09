import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { Navigator } from '../processes/navigator.tsx';

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };
//
// const theme = extendTheme({ colors });

// const theme = {
//   styles: {
//     global: (props: any) => ({
//       'html, body': {
//         fontSize: 'sm',
//         color: props.colorMode === 'dark' ? 'white' : 'gray.600',
//         lineHeight: 'tall',
//       },
//       a: {
//         color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
//       },
//     }),
//   },
// };

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
