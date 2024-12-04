import FeaturedProducts from "@/components/organisms/FeaturedProducts.vue";

export default {
  title: "Organisms/FeaturedProducts",
  component: FeaturedProducts,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    mockProducts: [
      {
        id: 1,
        title: "Featured Product 1",
        price: 99.99,
        image: "https://via.placeholder.com/600x400",
      },
      {
        id: 2,
        title: "Featured Product 2",
        price: 79.99,
        image: "https://via.placeholder.com/600x400",
      },
    ],
  },
};
