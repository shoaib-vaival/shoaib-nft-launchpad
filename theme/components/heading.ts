import { ComponentStyleConfig } from '@chakra-ui/react';

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: 'black',
  },
  sizes: {
    h1: {
      fontSize: '5xl',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '2xl',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: 'xl',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: '14px',
    },
  },
  defaultProps: {
    size: 'h1',
  },
};

export default Heading;
