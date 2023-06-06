export type creatorFeeTypes = {
    walletAddress: string;
    percentage: string;
    length: number;
}

export type collectionByIdTypes = {
    name: string;
    description: string;
    category: string;
    website_url: string;
    etherscan: string;
    telegram: string;
    twitter: string;
    instagram: string;
    Discord_id: string;
    _id: string;
    logoImageUrl: string;
    featureImageUrl: string;
    bannerImageUrl: string;
    creatorFee: creatorFeeTypes[];
  }

  export type categoriesAndTagsTypes = {
    map(arg0: (cat: categoriesAndTagsTypes) => { label: string; value: string; }): unknown;
    name: string;
    _id:string
}

export type imgUrlPropType = {
    url: string;
}
export type collectionStateTypes = {
    logoImageUrl?: string;
    featureImageUrl?: string;
    bannerImageUrl?: string;
    category?: string; 
    tags?: any;
}

export type createCollectionTypes = { 
    logoImageUrl: string; 
    bannerImageUrl: string; 
    featureImageUrl: string; 
    name: string; 
    description: string; 
    category: string | undefined; 
    tags: any; 
    website_url: string; 
    etherscan: string
  };