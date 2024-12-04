<template>
  <div class="container mx-auto p-4">
    <FeaturedProducts />
    <CategoryFilter v-model="selectedCategory" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>

const products = ref([]);
const selectedCategory = ref('');

// Fetch products
onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products.value = await response.json();

  } catch (error) {
    console.error('Error fetching products:', error);
  }
});

// Compute filtered products
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(
    (product) => product.category === selectedCategory.value
  );
});
</script>
