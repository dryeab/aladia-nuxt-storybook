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
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8amot7ROBW2ESuq38SW0xpV00YYm7Q_anfg&s",
      },
      {
        id: 2,
        title: "Featured Product 2",
        price: 79.99,
        image:
          "https://cdn-images.farfetch-contents.com/21/67/63/24/21676324_51717167_1000.jpg",
      },
    ],
  },
};
