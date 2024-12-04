import Image from "@/components/atoms/Image.vue";

export default {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    imgClass: { control: "text" },
  },
};

export const Default = {
  args: {
    src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    alt: "Sample Image",
    imgClass: "w-full h-48 object-cover mb-4",
  },
};
