// stories/atoms/Select.stories.js

import Select from '@/components/atoms/Select.vue';

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
    id: { control: 'text' },
    modelValue: { control: 'text' },
    selectClass: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Select },
  setup() {
    return { args };
  },
  template: `
    <Select v-bind="args">
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'select-id',
  modelValue: '',
  selectClass: 'block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md',
};
