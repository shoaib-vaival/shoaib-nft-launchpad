import { extendTheme } from '@chakra-ui/theme-utils';
import { colors } from './colors';
import { Button } from './components/button';
import { Input } from './components/input';
import { Menu } from './components/menu';
import { Card } from './components/card'
import { Form } from './components/form'
import { Stat } from './components/stat'
import { Tabs } from './components/tabs'
import { Container } from './components/container'
import { Modal } from './components/modal'
import { Table } from './components/table'



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
        Tabs,
        Container,
        Modal,
        Table
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
            },
            '.datePicker' :{
                backGround:'red',
                width:"100%",
                input:{
                    width:"100%"
                },
                
            },
            '.DatePickerPopper':{
                borderRadius:'4px',
                border: '1px solid #e2e8f0',
                '.react-datepicker__header':{
                    backgroundColor:'#F0F0F0',
                }
            }
        }
    }
})