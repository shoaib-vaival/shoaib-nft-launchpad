import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Table:ComponentStyleConfig = {
    variants:{
        simple:{
            th:{
                color:'rgba(117, 108, 153, 1)',
                fontSize:'14px',
                fontStyle:'normal',
                fontWeight:'500',
                paddingBottom:'16px',
                borderBottom:'1px solid',
                borderColor:'rgba(53, 53, 53, 0.2)'
            },
            td:{
                border:'none',
                fontSize:'16px',
                color:'rgba(57, 63, 89, 1)'
            }
        }
    }

}