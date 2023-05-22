import { ComponentStyleConfig } from '@chakra-ui/react';

const Badge: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'semibold',
    lineHeight: '15px',
    borderRadius: '24px',
    width: 'fit-content',
    maxH: '28px',
    padding: '6px 14px',
  },
  // 2. We can add a new Badge size or extend existing
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    default: {
      bg: 'gray.300',
      color: 'black',
    },
    primary: {
      bg: 'purple.300',
      color: 'purple.800',
    },
    black: {
      bg: 'gray.300',
      color: 'black',
    },
    info: {
      bg: 'blue.300',
      color: 'blue.800',
    },
    success: {
      bg: 'teal.200',
      color: 'teal.900',
    },
    warning: {
      bg: 'orange.300',
      color: 'orange.900',
    },
    danger: {
      bg: 'red.300',
      color: 'red.700',
    },
    outlined: {
      bg: 'white',
      color: 'black',
      border: '1px solid',
      borderColor: 'gray.400',
      _hover: {
        bg: 'gray.200',
      },
    },
    primaryOutlined: {
      bg: 'white',
      color: 'purple.700',
      border: '1px solid',
      borderColor: 'purple.700',
      _hover: {
        bg: 'purple.200',
      },
    },
    blackOutlined: {
      bg: 'white',
      color: 'black',
      border: '1px solid',
      borderColor: 'black',
      _hover: {
        bg: 'gray.300',
      },
    },
    infoOutlined: {
      bg: 'white',
      color: 'blue.700',
      border: '1px solid',
      borderColor: 'blue.700',
      _hover: {
        bg: 'blue.200',
      },
    },
    successOutlined: {
      bg: 'white',
      color: 'teal.700',
      border: '1px solid',
      borderColor: 'teal.700',
      _hover: {
        bg: 'teal.200',
      },
    },
    warningOutlined: {
      bg: 'white',
      color: 'orange.900',
      border: '1px solid',
      borderColor: 'orange.900',
      _hover: {
        bg: 'orange.200',
      },
    },
    dangerOutlined: {
      bg: 'white',
      color: 'red.700',
      border: '1px solid',
      borderColor: 'red.700',
      _hover: {
        bg: 'red.200',
      },
    },

    // 3.1 Campaign Status
    draft: {
      bg: 'gray.600',
      color: 'white',
      fontSize: '11',
    },
    pending: {
      bg: 'orange.300',
      color: 'orange.900',
    },
    immediate: {
      bg: 'teal.200',
      color: 'teal.900',
    },
    scheduled: {
      bg: 'purple.300',
      color: 'purple.800',
    },
    completed: {
      bg: 'teal.200',
      color: 'teal.900',
    },
    stopped: {
      bg: 'gray.200',
      color: 'gray.800',
    },
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Badge;
