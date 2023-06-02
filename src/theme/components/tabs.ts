import { ComponentStyleConfig } from '@chakra-ui/react';

export const Tabs:ComponentStyleConfig = {
    baseStyle:{
        tab:{
            fontSize:'18px',
            fontWeight:700,
        _selected:{
                 color:'#6863F3',
                 paddingBottom:'15px',
                 paddingLeft:'12px',
             }
        },
         tablist: {
             borderBottom: '2x solid',
             borderColor: 'inherit',
             paddingLeft:'12px',
            },
    }
}

