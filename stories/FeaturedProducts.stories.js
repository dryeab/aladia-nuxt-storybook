// stories/organisms/FeaturedProducts.stories.js

import FeaturedProducts from '@/components/organisms/FeaturedProducts.vue';
import { ref } from 'vue';

export default {
  title: 'Organisms/FeaturedProducts',
  component: FeaturedProducts,
};

const Template = () => ({
  components: { FeaturedProducts },
  setup() {
    const featuredProducts = ref([
      {
        id: 1,
        title: 'Featured Product 1',
        price: 99.99,
        image: 'https://via.placeholder.com/600x400',
      },
      {
        id: 2,
        title: 'Featured Product 2',
        price: 79.99,
        image: 'https://via.placeholder.com/600x400',
      },
      // Add more products as needed
    ]);

    return { featuredProducts };
  },
  template: '<FeaturedProducts :mockProducts="featuredProducts" />',
});

export const Default = Template.bind({});
