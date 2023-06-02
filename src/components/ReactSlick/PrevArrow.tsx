import { Button } from '@chakra-ui/button'
import { ChevronLeftIcon } from '@chakra-ui/icons'



export const PrevArrow = ({prev, ...rest}:any)=>{
    return <Button borderRadius='full' p='0' _hover={{bg:'white'}} onClick={()=>prev()} color='purple.500' bg='white' boxShadow= '0px 3px 6px 0px #8E72FF4D'
 {...rest} zIndex='1' top='45%' ><ChevronLeftIcon color='purple.500' opacity='0.5' _hover={{ opacity:'1'}} fontSize='38px'/></Button>
}