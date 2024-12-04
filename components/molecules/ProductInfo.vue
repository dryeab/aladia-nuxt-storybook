<template>
  <div>
    <Heading :text="title" :size="titleSize" />
    <Price :amount="price" />
    <p class="text-sm text-gray-600">{{ category }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  titleSize: { type: String, default: 'md' },
});
</script>
