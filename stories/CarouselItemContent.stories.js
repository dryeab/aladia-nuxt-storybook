import CarouselItemContent from "@/components/molecules/CarouselItemContent.vue";

export default {
  title: "Molecules/CarouselItemContent",
  component: CarouselItemContent,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    product: {
      title: "Featured Product",
      price: 99.99,
      image: "https://via.placeholder.com/600x400",
    },
  },
};
