export const data = {
  categories: [
    {
      id: 1,
      title: "Vegetables & Fruits",
      subCategoryIds: [1, 2],
      isAvailable: true,
    },
    {
      id: 2,
      title: "Breads & Dairy",
      subCategoryIds: [3, 4],
      isAvailable: true,
    },
    {
      id: 3,
      title: "Snacks",
      subCategoryIds: [5],
      isAvailable: false,
    },
    {
      id: 4,
      title: "Cleaning and Household",
      subCategoryIds: [6],
      isAvailable: false,
    },
  ],
  subCategories: [
    {
      id: 1,
      title: "vegetables",
      items: [
        {
          name: "Cucumber",
          color: "#00B121",
          options: "Large",
          sku_id: "SKU02596052",
          quantity: "10",
        },
        {
          name: "Green Chilli",
          color: "#00B121",
          options: "Small",
          sku_id: "SKU02596053",
          quantity: "5",
        },
      ],
    },
    {
      id: 2,
      title: "fruits",
      items: [
        {
          name: "Pineapple",
          color: "#FFDA00",
          options: "Medium",
          sku_id: "SKU02596049",
          quantity: "unlimited",
        },
      ],
    },
    {
      id: 3,
      title: "breads",
      items: [
        {
          name: "Brown",
          color: "#FFDA00",
          options: "Medium",
          sku_id: "SKU02596049",
          quantity: "unlimited",
        },
      ],
    },
    {
      id: 4,
      title: "dairy",
      items: [
        {
          name: "Butter",
          color: "#FFDA00",
          options: "Medium",
          sku_id: "SKU02596049",
          quantity: "unlimited",
        },
      ],
    },
    {
      id: 5,
      title: "snacks",
      items: [],
    },
    {
      id: 6,
      title: "Cleaning and HouseHold",
      items: [],
    },
  ],
};
