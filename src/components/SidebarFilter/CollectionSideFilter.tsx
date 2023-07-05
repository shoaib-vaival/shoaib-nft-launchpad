import { SidebarFilter } from ".";

export const CollectionSideFilter = ({ onChange }: any) => {
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
      border: false,
      filters: [
        {
          name: "quantity",
          type: "radio",
          options: ["all", "single", "bundle"],
          label: ["All items", "Single Items", "Bundles"],
        },
      ],
    },
  ];
  return (
    <SidebarFilter
      filterGroups={filters}
      onFilterChange={(filters: any) => onChange(filters)}
    />
  );
};
