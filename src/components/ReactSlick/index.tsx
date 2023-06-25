import {  useState} from 'react';
import Slider from 'react-slick';
import { settings } from './settings'
import {Box , useBreakpointValue} from '@chakra-ui/react'
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';


export const SlickSlider = ({children, customSettings}:any)=>{
    const [carousalRef,setCarousalRef] = useState<any>()
    const isSmall = useBreakpointValue({base:true, sm:false, md:false})
    console.log(isSmall, 'isSmall')
    return(
        <>
        {/* // <>
        // {children}
        // </> */}
         <Box position='relative' marginTop='24px'>
        {children  && (children?.length > 4) ?
            <Box position='absolute' height='100%' width='100%'>
                <PrevArrow prev={()=>carousalRef.slickPrev()}/>
                <NextArrow next={()=>carousalRef.slickNext()}/>
            </Box>
            :isSmall ? <Box position='absolute' height='100%' width='100%'>
                <PrevArrow prev={()=>carousalRef.slickPrev()}/>
                <NextArrow next={()=>carousalRef.slickNext()}/>
            </Box>:''
    }
            <Slider {...settings} ref={(c:any)=>setCarousalRef(c)}>
                {children}
            </Slider>
            </Box>
            </>
    )
}