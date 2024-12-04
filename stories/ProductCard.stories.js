import ProductCard from "@/components/organisms/ProductCard.vue";

export default {
  title: "Organisms/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "horizontal"] },
    },
  },
};

export const Default = {
  args: {
    product: {
      title: "Sample Product",
      price: 29.99,
      category: "Electronics",
      image: "https://via.placeholder.com/150",
    },
    variant: "default",
  },
};

export const Horizontal = {
  args: {
    product: {
      title: "Sample Product",
      price: 29.99,
      category: "Electronics",
      image: "https://via.placeholder.com/150",
    },
    variant: "horizontal",
  },
};
