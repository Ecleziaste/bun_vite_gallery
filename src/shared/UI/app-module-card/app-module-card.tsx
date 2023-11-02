import { GridItem, useMediaQuery } from '@chakra-ui/react';
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
      <GridItem
        w="100%"
        h={isLargerThan460 ? '100%' : '200px'}
        display="flex"
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
      </GridItem>
    </ReactRouterLink>
  );
};
