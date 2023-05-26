import { extendTheme } from "@chakra-ui/theme-utils";
import { colors } from "./colors";
import { Button }from './components/Button'





export const theme = extendTheme({
    colors,
    components:{
        Button,
    },
    styles:{
        global:{
            h1:{
                fontSize: '4xl',
                
            }
        }
    }
})