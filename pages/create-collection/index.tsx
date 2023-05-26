import React, { useState } from 'react'
import FileUpload from '../../src/components/common/UploadFile'
import { Detail } from './consts'
import { ImgUrlFunParam } from '../../src/components/common/UploadFile/types'

const CreateCollection = () => {

  const [collection, setCollection] = useState<any>({})

  const getImgUrl = (imgUrlProp: ImgUrlFunParam) => {
    if(imgUrlProp?.imgFor === 'logo'){
      setCollection({...collection, logoImageUrl: imgUrlProp?.url})
    }
    else if(imgUrlProp?.imgFor === 'featured'){
      setCollection({...collection, featureImageUrl: imgUrlProp?.url})
    }
    if(imgUrlProp?.imgFor === 'banner'){
      setCollection({...collection, bannerImageUrl: imgUrlProp?.url})
    }
  }

  return (
    <div>
      <h1>Create Collection</h1>
     <FileUpload  label = "Logo Image *" detail ={Detail?.logoDetail} imgFor = 'logo' imgUrl = {getImgUrl}/>
     <FileUpload  label = "Featured Image" detail ={Detail?.featuredImg} imgFor = 'featured' imgUrl = {getImgUrl}/>
     <FileUpload  label = "Banner Image" detail ={Detail?.bannerImg} imgFor = 'banner' imgUrl = {getImgUrl}/>
    </div>
  )
}

export default CreateCollection
