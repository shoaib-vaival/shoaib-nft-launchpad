import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    borderRadius: '4px',
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    md: {
      fontSize: 'sm',
    },
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
      _hover: {
        bg: 'gray.400',
        _disabled: {
          bg: 'gray.300',
        },
      },
    },
    primary: {
      bg: 'purple.700',
      color: 'white',
      _hover: {
        bg: 'purple.800',
        _disabled: {
          bg: 'purple.700',
        },
      },
    },
    black: {
      bg: 'gray.800',
      color: 'white',
      _hover: {
        bg: 'gray.700',
        _disabled: {
          bg: 'gray.700',
        },
      },
    },
    info: {
      bg: 'blue.700',
      color: 'white',
      _hover: {
        bg: 'blue.800',
        _disabled: {
          bg: 'blue.700',
        },
      },
    },
    success: {
      bg: 'teal.700',
      color: 'white',
      _hover: {
        bg: 'teal.800',
        _disabled: {
          bg: 'teal.700',
        },
      },
    },
    warning: {
      bg: 'orange.700',
      color: 'white',
      _hover: {
        bg: 'orange.800',
        _disabled: {
          bg: 'orange.700',
        },
      },
    },
    danger: {
      bg: 'red.700',
      color: 'white',
      _hover: {
        bg: 'red.800',
        _disabled: {
          bg: 'red.700',
        },
      },
    },
    disabled: {
      bg: 'gray.300',
      color: 'gray.600',
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
    disabledOutlined: {
      bg: 'white',
      color: 'gray.500',
      border: '1px solid',
      borderColor: 'gray.500',
    },
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Button;
