<template>
  <div class="product-card border rounded-lg shadow hover:shadow-lg transition p-4 hover:cursor-pointer">
    <!-- Default Variant -->
    <div v-if="variant === 'default'">
      <Image :src="product.image" :alt="product.title" imgClass="w-full h-48 object-cover mb-4" />
      <ProductInfo :title="product.title" :price="product.price" :category="product.category" />
    </div>

    <!-- Horizontal Variant -->
    <div v-else-if="variant === 'horizontal'" class="flex">
      <Image :src="product.image" :alt="product.title" imgClass="w-32 h-32 object-cover mr-4" />
      <ProductInfo :title="product.title" :price="product.price" :category="product.category" titleSize="md" />
    </div>

    <!-- Fallback to Default Variant -->
    <div v-else>
      <Image :src="product.image" :alt="product.title" imgClass="w-full h-48 object-cover mb-4" />
      <ProductInfo :title="product.title" :price="product.price" :category="product.category" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'default', // Options: 'default', 'horizontal'
  },
});
</script>