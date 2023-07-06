export const collectionDetail = {
  logoDetail:
    "This image will also be used for display purposes. 350 X 350 recommended.",
  featuredImg:
    "This image will be used for featuring your collection on the homepage, category pages, or other displays areas. recommended size 600 X 400.",
  bannerImg:
    "This image will appear at the top of your collection page. Avoid including too much text in it , as the dimentions change on different devices. 1320 X 360 recommended.",
  desc: "Markdown syntax is supported. 0 of 1000 characters used.",
};

export const nftDetail = {
  logoDetail:
    "This image will also be used for display purposes. 350 X 350 recommended.",
  featuredImg:
    "This image will be used for featuring your collection on the homepage, category pages, or other displays areas. recommended size 600 X 400.",
  bannerImg:
    "This image will appear at the top of your collection page. Avoid including too much text in it , as the dimentions change on different devices. 1320 X 360 recommended.",
  desc: "Markdown syntax is supported. 0 of 1000 characters used.",
};
export const createnft = {
  bannerImg: "File types supported: JPEG (or JPG), PNG only. Max size: 10 MB",
};

export const pagePaths = {
  NFT: "/create-nft",
  COLLECTION: "/collection/create",
};

export const currencySymbol = "MATIC";
export const timeFilterOptions = {
  type: "small",
  defaultValue: "15m",
  options: [
    { name: "15m", label: "15m" },
    { name: "1h", label: "1h" },
    { name: "24h", label: "24h" },
    { name: "7d", label: "7d" },
  ],
};

export const categoriesFilterOptions = (categories:any) => {
    console.log(categories[0].id.toString(), 'categories[0]')
  return {
    type: "",
    defaultValue: '690eba53-b643-40da-a4b2-3c177f22dfe5',
    options: categories && categories?.map((category:any, index:number)=>{
        return { name: category?.id, label: category?.name }
    })
  };
};
