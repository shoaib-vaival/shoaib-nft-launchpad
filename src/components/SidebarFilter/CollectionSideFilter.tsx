import { SidebarFilter } from ".";

export const CollectionSideFilter = ({ onChange }: any) => {
  const properties = [
    {
      id: "c36ee4f9-adbf-4e27-9f07-6ede32db2828",
      name: "Elbo",
      nftId: "f7c4a639-630a-431e-8320-54a033c4029c",
      collectionId: "273fe60d-a37d-4b45-b1e0-3adaec92c5a9",
      quantity: 1,
      insertedDate: "2023-07-05T11:22:52.964Z",
      updatedDate: "2023-07-05T11:22:52.964Z",
      propertyValues: [
        {
          id: "d5134ad4-a9aa-4bf6-871a-11e374767421",
          value: "Brown",
          quantity: 1,
          propertyId: "c36ee4f9-adbf-4e27-9f07-6ede32db2828",
          insertedDate: "2023-07-05T11:22:52.966Z",
          updatedDate: "2023-07-05T11:22:52.966Z",
        },
        {
          id: "e836598c-c621-4051-9028-a512074736b1",
          value: "Red",
          quantity: 1,
          propertyId: "c36ee4f9-adbf-4e27-9f07-6ede32db2828",
          insertedDate: "2023-07-05T11:23:50.275Z",
          updatedDate: "2023-07-05T11:23:50.275Z",
        },
      ],
    },
    {
      id: "2bef1a68-5307-4754-b8e5-b55894fdca7e",
      name: "Eyes",
      nftId: "f7c4a639-630a-431e-8320-54a033c4029c",
      collectionId: "273fe60d-a37d-4b45-b1e0-3adaec92c5a9",
      quantity: 1,
      insertedDate: "2023-07-05T11:22:52.955Z",
      updatedDate: "2023-07-05T11:22:52.955Z",
      propertyValues: [
        {
          id: "a7e80120-1373-42e1-b5e5-68df39fdc10f",
          value: "White",
          quantity: 1,
          propertyId: "2bef1a68-5307-4754-b8e5-b55894fdca7e",
          insertedDate: "2023-07-05T11:22:52.958Z",
          updatedDate: "2023-07-05T11:22:52.958Z",
        },
      ],
    },
  ];

  const filters = [
    {
      label: "Status",
      name: "status",
      hasFilters: true,
      border: true,
      filters: [
        {
          name: "status",
          type: "radio",
          options: ["all", "buyNow"],
          label: ["All", "Buy Now"],
        },
      ],
    },
    {
      label: "Quantity",
      name: "quantity",
      hasFilters: true,
      border: true,
      filters: [
        {
          name: "quantity",
          type: "radio",
          options: ["all", "single", "bundle"],
          label: ["All items", "Single Items", "Bundles"],
        },
      ],
    },
    {
      label: "Properties",
      name: "quantity",
      hasFilters: false,
      border: false,
      filters: [],
    },
  ];
  const propertyList = properties.map((property: any, index: number) => {
    const propertyValues = property.propertyValues.map(
      (propertyValue: any, index: number) => {
        return {
          label: propertyValue?.value?.substring(0, 16) + "...",
          name: propertyValue?.value,
          type: "checkbox",
        };
      }
    );
    return {
      label: property?.name,
      name: property?.name?.toLowerCase(),
      hasFilters: true,
      border: false,
      showQuantity: true,
      filters: propertyValues,
    };
  });

  return (
    <SidebarFilter
      filterGroups={filters.concat(propertyList)}
      onFilterChange={(filters: any) => onChange(filters)}
    />
  );
};
