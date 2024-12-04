<template>
  <FilterSelect id="category" label-text="Filter by Category:" v-model="internalCategory">
    <option value="">All Categories</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      }}
    </option>
  </FilterSelect>
</template>



<script setup>

const props = defineProps({
  modelValue: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

const internalCategory = ref(props.modelValue);
const categories = ref([]);

// Fetch categories on mount
onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    categories.value = await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
});

// Watch internalCategory and emit updates
watch(internalCategory, (newValue) => {
  emit('update:modelValue', newValue);
});

// Watch for changes from parent
watch(
  () => props.modelValue,
  (newValue) => {
    internalCategory.value = newValue;
  }
);
</script>