import { Flex, useMediaQuery } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export type AppModuleCardProps = {
  name: string;
  linkTo: string;
  color?: string;
};

export const AppModuleCard = ({ name, linkTo, color = 'green.800' }: AppModuleCardProps) => {
  const [isLargerThan460] = useMediaQuery('(min-width: 460px)');

  return (
    <ReactRouterLink to={linkTo}>
      <Flex
        maxW={isLargerThan460 ? '200px' : '400px'}
        minW={isLargerThan460 ? '200px' : '280px'}
        maxH={isLargerThan460 ? '200px' : '300px'}
        minH="200px"
        alignItems="center"
        justifyContent="center"
        bg={color}
        fontSize="1.5rem"
        overflow="hidden"
        borderRadius="30px"
        cursor="pointer"
        _hover={{ opacity: 0.85 }}
      >
        {name}
      </Flex>
    </ReactRouterLink>
  );
};
