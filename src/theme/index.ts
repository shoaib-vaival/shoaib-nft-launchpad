import { extendTheme } from "@chakra-ui/theme-utils";
import { colors } from "./colors";
import { Button } from './components/Button';
import { Input } from './components/input';
import { Menu } from './components/menu';



const fonts = {
    heading: 'Inter',
    body: 'Inter'
}

export const theme = extendTheme({
    fonts,
    colors,
    components:{
        Button,
        Input,
        Menu
    },
    styles:{
        global:{
            h1:{
                fontSize: '4xl',
                
            }
        }
    }
})