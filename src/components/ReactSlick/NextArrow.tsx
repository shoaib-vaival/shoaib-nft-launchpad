import { Button } from '@chakra-ui/button'
import { ChevronRightIcon } from '@chakra-ui/icons'


export const NextArrow = ({next,...rest}:any)=>{
    return <Button _hover={{bg:'white'}} borderRadius='full'  bg='white' p='0' onClick={()=>next()} {...rest} float='right' zIndex='1' top={{base:'40%',md:'45%'}} boxShadow= '0px 3px 6px 0px #8E72FF4D'><ChevronRightIcon color='purple.500' opacity='0.5' _hover={{ opacity:'1'}} fontSize='38px'/></Button>
}