// stories/organisms/ProductCard.stories.js

import ProductCard from "@/components/organisms/ProductCard.vue";

export default {
  title: "Organisms/ProductCard",
  component: ProductCard,
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "horizontal"] },
    },
  },
};

const Template = (args) => ({
  components: { ProductCard },
  setup() {
    return { args };
  },
  template: '<ProductCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  product: {
    title: "Sample Product",
    price: 29.99,
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },
  variant: "default",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  product: {
    title: "Sample Product",
    price: 29.99,
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  },
  variant: "horizontal",
};
