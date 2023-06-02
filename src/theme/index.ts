import { extendTheme } from "@chakra-ui/theme-utils";
import { colors } from "./colors";
import { Button } from './components/button';
import { Input } from './components/input';
import { Menu } from './components/menu';
import { Card } from './components/card'
import { Form } from './components/form'
import { Stat } from './components/stat'
import { Tabs } from './components/tabs'



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
        Form,
        Stat,
        Tabs
    },
    styles:{
        global:{
            body:{
                color: colors.black,
                backgroundImage:'url("/assets/images/bg.webp")',
                backgroundSize:'cover'
            },
            h1:{
                fontSize:'56px'
            }
        }
    }
})