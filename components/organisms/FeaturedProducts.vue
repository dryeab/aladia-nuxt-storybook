<template>
  <div class="mb-8">
    <el-carousel height="200px" :interval="5000" arrow="always">
      <el-carousel-item v-for="product in productsToShow" :key="product.id">
        <CarouselItemContent :product="product" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

const props = defineProps({
  mockProducts: {
    type: Array,
    default: null,
  },
});

const productsToShow = ref([]);

onMounted(async () => {
  if (props.mockProducts) {
    productsToShow.value = props.mockProducts;
  } else {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      productsToShow.value = await response.json();
    } catch (error) {
      console.error('Error fetching featured products:', error);
    }
  }
});
</script>