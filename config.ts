export const config = {
  title: "Plaiceholder × Next.js",
  domain: "https://plaiceholder.co",
  social: {
    github: "https://github.com/joe-bell/plaiceholder/tree/main/examples/next",
    twitter: "https://twitter.com/joebell_",
  },
  examples: {
    variants: {
      single: { title: "Single" },
      multiple: { title: "Multiple" },
    },
    pages: {
      css: {
        title: "CSS",
      },
      svg: {
        title: "SVG",
      },
      base64: {
        title: "Base64",
      },
      color: {
        title: "Color",
      },
    },
  },
} as const;