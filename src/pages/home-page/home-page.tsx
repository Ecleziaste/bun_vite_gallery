import { Button } from '@chakra-ui/react';

import { useLogOut } from '../../features';

export const HomePage = () => {
  const logout = useLogOut();

  return (
    <div>
      Home page
      <Button w="100px" h="40px" onClick={logout}>
        Log out
      </Button>
    </div>
  );
};
