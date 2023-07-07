import { SidebarFilter } from ".";
import { QUERY_KEYS } from "../../hooks/queryKeys";
import { useQuery } from "../../hooks/useQuery";
import { ApiUrl } from "../../apis/apiUrl";

export const CollectionSideFilter = ({ onChange, collectionId }: any) => {
  const { data: properties } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_COLLECTION_PROPERTIES, collectionId],
    url: `${ApiUrl?.GET_COLLECTION_PROPERTIES}/${collectionId}`,
    showToast: false,
    token: true,
    enabled: collectionId ? true : false,
  });
  console.log("collectionId", collectionId);
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
  const propertyList =
    properties &&
    properties?.map((property: any, index: number) => {
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
  console.log(propertyList, "propertyList");
  return (
    <SidebarFilter
      filterGroups={propertyList ? filters.concat(propertyList) : filters}
      onFilterChange={(filters: any) => onChange(filters)}
    />
  );
};
