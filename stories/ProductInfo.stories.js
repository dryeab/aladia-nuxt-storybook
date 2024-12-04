// stories/molecules/ProductInfo.stories.js

import ProductInfo from "@/components/molecules/ProductInfo.vue";

export default {
  title: "Molecules/ProductInfo",
  component: ProductInfo,
  tags: ["autodocs"], // Optional: Enables automatic documentation generation
  argTypes: {
    title: { control: "text" },
    price: { control: "number" },
    category: { control: "text" },
    titleSize: { control: { type: "select", options: ["sm", "md", "lg"] } },
  },
};

export const Default = {
  args: {
    title: "Sample Product",
    price: 49.99,
    category: "Electronics",
    titleSize: "md",
  },
};
