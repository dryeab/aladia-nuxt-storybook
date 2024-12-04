// stories/organisms/CategoryFilter.stories.js

import CategoryFilter from '@/components/organisms/CategoryFilter.vue';

export default {
  title: 'Organisms/CategoryFilter',
  component: CategoryFilter,
  argTypes: {
    modelValue: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { CategoryFilter },
  setup() {
    return { args };
  },
  template: '<CategoryFilter v-model="args.modelValue" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
};
