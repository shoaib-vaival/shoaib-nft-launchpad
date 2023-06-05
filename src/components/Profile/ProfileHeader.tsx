import { Container } from "@chakra-ui/layout"
import {Image} from '@chakra-ui/react'


const ProfileHeader = ()=>{
    return (
        <>
        <Container variant='colorful' position="relative" bgSize="cover" bgImage="/assets/images/cover-image1.png" backgroundRepeat="no-repeat" h="400px">
            <Image src="/assets/images/RectangleCardImg.png" position="absolute"/>

        </Container>
        </>
    )
}

export default ProfileHeader