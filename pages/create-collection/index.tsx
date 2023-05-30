import React, { useState } from 'react'
import { FileUpload, ReactSelect, ImgUrlFunParam } from '../../src/components/common'
import { Detail } from './consts'
import { useQuery } from '../../src/hooks/useQuery';
import { ApiUrl } from '../../src/apis/apiUrl'
import { QUERY_KEYS } from '../../src/hooks/queryKeys'
import {Container, FormControl, Heading, Stack} from "@chakra-ui/react"


const CreateCollection = () => {

  const [collection, setCollection] = useState<any>({})

  const { data: categories } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_CAT],
    url: ApiUrl?.GET_CATEGORIES,
  });

  const { data: tags } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_TAGS],
    url: ApiUrl?.GET_TAGS,
  });

  const filtredCat = categories && categories?.map((cat:any)=>({label: cat?.name, value: cat?._id}))
  const filtredTags = tags && tags?.map((cat:any)=>({label: cat?.name, value: cat?._id}))

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

  const getSelectedData = (selectedValue: any, identifier: string) => {
    if(identifier == 'cat'){
    setCollection({...collection, category: selectedValue?.value})
    }
    else{
      setCollection({...collection, tags: selectedValue?.length > 0 ? selectedValue?.map((category:any)=>category?.value): []})
    }
  }

  return (
    <Container maxW="952px" p={0}>
      <Heading as="h1">Create Collection</Heading>
      <FormControl>
      <Stack direction="column" spacing="40px">
     <FileUpload  label = "Logo Image *" detail ={Detail?.logoDetail} imgFor = 'logo' imgUrl = {getImgUrl} width="220px" height="220px" onlyIcon={true}/>
     <FileUpload  label = "Featured Image" detail ={Detail?.featuredImg} imgFor = 'featured' imgUrl = {getImgUrl}/>
     <FileUpload  label = "Banner Image" detail ={Detail?.bannerImg} imgFor = 'banner' imgUrl = {getImgUrl}/>
     <div><ReactSelect options={filtredCat} isMultiple={false} getSelectedData={getSelectedData} identifier='cat'/></div>
     <div><ReactSelect options={filtredTags} isMultiple={true} getSelectedData={getSelectedData} identifier='tag'/></div>
     </Stack>
     </FormControl>
    </Container>
  )
}

export default CreateCollection
