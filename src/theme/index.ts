import { extendTheme } from "@chakra-ui/theme-utils";
import { colors } from "./colors";
import { Button } from './components/Button';
import { Input } from './components/input';
import { Menu } from './components/menu';
import {Card} from './components/card'
import {Form} from './components/form'



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
        Menu,
        Card,
        Form
    },
    styles:{
        global:{
            body:{
                color: colors.black
            },
            h1:{
                fontSize: '4xl',
                
            }
        }
    }
})