// stories/atoms/Heading.stories.js

import Heading from "@/components/atoms/Heading.vue";

export default {
  title: "Atoms/Heading",
  component: Heading,
  argTypes: {
    text: { control: "text" },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
    // additionalClass: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Heading },
  setup() {
    return { args };
  },
  template: '<Heading v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
  text: "Small Heading",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Medium Heading",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  text: "Large Heading",
  size: "lg",
};
