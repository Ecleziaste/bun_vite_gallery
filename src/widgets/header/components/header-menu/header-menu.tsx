import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { useLogOut } from '../../../../features';
import { RoutesNames } from '../../../../shared/common/routes-names.ts';

export const HeaderMenu = () => {
  const logout = useLogOut();
  const navigate = useNavigate();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            w="130px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            Menu
          </MenuButton>

          <MenuList>
            <MenuItem onClick={() => navigate(RoutesNames.HOME)}>Home page</MenuItem>
            <MenuItem onClick={() => navigate(RoutesNames.PROFILE)}>Profile page</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
