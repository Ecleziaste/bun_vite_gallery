// import { Box } from '@chakra-ui/react';

import React from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
  // return <Box></Box>;
  return (
    <div>
      {/*header*/}
      <Outlet />
      {/*footer*/}
    </div>
  );
};
