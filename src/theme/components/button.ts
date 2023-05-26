

export const Button = {
    baseStyle: {
        fontWeight: 'regular',
        borderRadius: '8px',
        lineHeight:'0px'
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
    }
}