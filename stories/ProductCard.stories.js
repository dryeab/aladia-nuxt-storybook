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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8amot7ROBW2ESuq38SW0xpV00YYm7Q_anfg&s",
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
      image:
        "https://cdn-images.farfetch-contents.com/21/67/63/24/21676324_51717167_1000.jpg",
    },
    variant: "horizontal",
  },
};
