export type getCategoriesApiType={
    message: string,
    data: categoriesType[]
    
}

export type categoriesType = {
    id:string,
    name: string,
    insertedDate: string,
    updatedDate: string,
    collectionId: string
}