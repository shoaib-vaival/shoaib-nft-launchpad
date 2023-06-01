import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Form:ComponentStyleConfig={
    parts: ['container', 'requiredIndicator', 'helperText'],
  baseStyle: {
    /// The container styles the FormControl
    container: {
      marginY: '20px',
      label: {
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
    helperText:{
        fontSize:'16px',
        fontWeight:'normal',
        fontStyle:'normal',
        color:'#393F59'
    }
  },
}