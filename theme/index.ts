import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button, Heading, Text, Checkbox, Badge, Table } from './components';

const fonts = {
  heading: `"Inter", sans-serif`,
  body: `"Inter", sans-serif`,
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Heading,
    Text,
    Checkbox,
    Badge,
    Table,
  },
  breakpoints,
});
