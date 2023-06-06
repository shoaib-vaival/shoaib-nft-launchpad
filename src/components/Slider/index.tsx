import { Heading } from "@chakra-ui/layout"
import { Children } from "react"
import { SlickSlider } from "../ReactSlick"


const CustomSlider = ({name, children}:{name:string; children:any}) => {
    return (
        <>

        {name?<Heading>{name}</Heading>:''}
        <SlickSlider>
           {children}
        </SlickSlider>
        </>
    )
}
export default CustomSlider
