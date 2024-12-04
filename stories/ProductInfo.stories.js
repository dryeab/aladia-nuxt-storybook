// stories/molecules/ProductInfo.stories.js

import ProductInfo from '@/components/molecules/ProductInfo.vue';

export default {
  title: 'Molecules/ProductInfo',
  component: ProductInfo,
  argTypes: {
    title: { control: 'text' },
    price: { control: 'number' },
    category: { control: 'text' },
    titleSize: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
  },
};

const Template = (args) => ({
  components: { ProductInfo },
  setup() {
    return { args };
  },
  template: '<ProductInfo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Product',
  price: 49.99,
  category: 'Electronics',
  titleSize: 'md',
};
