// stories/molecules/CarouselItemContent.stories.js

import CarouselItemContent from '@/components/molecules/CarouselItemContent.vue';

export default {
  title: 'Molecules/CarouselItemContent',
  component: CarouselItemContent,
  argTypes: {
    product: { control: 'object' },
  },
};

const Template = (args) => ({
  components: { CarouselItemContent },
  setup() {
    return { args };
  },
  template: '<CarouselItemContent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  product: {
    title: 'Featured Product',
    price: 99.99,
    image: 'https://via.placeholder.com/600x400',
  },
};
