import { ComponentStyleConfig } from '@chakra-ui/react';

const Table: ComponentStyleConfig = {
  baseStyle: {
    table: {
      borderWidth: '3px',
      borderColor: 'gray.300',
    },
    th: {
      fontSize: 'sm',
      textTransform: 'capitalize',
    },
    td: {
      fontSize: 'sm',
      color: 'black',
    },
  },
  defaultProps: {
    variant: 'simple',
  },
};

export default Table;
