import Image from "@/components/atoms/Image.vue";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    imgClass: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Image },
  setup() {
    return { args };
  },
  template: '<Image v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  alt: "Sample Image",
  imgClass: "w-full h-48 object-cover mb-4",
};
