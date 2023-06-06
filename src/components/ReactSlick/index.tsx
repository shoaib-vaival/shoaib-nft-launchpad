import {  useState } from 'react';
import Slider from 'react-slick';
import { settings } from './settings'
import {Box} from '@chakra-ui/react'
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';


export const SlickSlider = ({children}:any)=>{
    const [carousalRef,setCarousalRef] = useState<any>()
    return(
        // <>
        // {children}
        // </>
        <Box position='relative' marginTop='24px'>
            <Box position='absolute' height='100%' width='100%'>
                <PrevArrow prev={()=>carousalRef.slickPrev()}/>
                <NextArrow next={()=>carousalRef.slickNext()}/>
            </Box>
        <Slider {...settings} ref={(c:any)=>setCarousalRef(c)}>
          {children}
       </Slider>
       </Box>
    )
}