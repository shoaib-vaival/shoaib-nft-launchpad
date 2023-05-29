import { ComponentStyleConfig } from "@chakra-ui/react";


export const Button:ComponentStyleConfig = {
    baseStyle: {
        fontWeight: '600px',
        borderRadius: '8px',
        lineHeight:'0px',
        fontStyle:'normal',
    },
    sizes:{
        xs:{
            padding:'12px 16px',
            fontSize:'14px'
        },
        sm:{
             padding:'16px 24px',
             fontSize:'14px'
        },
        md:{
             padding:'20px 32px',
            fontSize:'14px'
        },
        lg:{
            padding:'23px 32px',
            fontSize:'16px'
        }
    },
    variants:{
        primary:{
            bg:'purple.500',
            color:'white',
            _hover: {
                bg: 'purple.600',
            },
        }, 
        secondary:{
            bg:'white',
            color:'purple.500',
            border: '1px solid',
            borderColor:'purple.500'
        }
    }
}