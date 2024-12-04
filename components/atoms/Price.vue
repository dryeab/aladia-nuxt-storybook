<template>
  <p class="text-gray-700 mb-2">${{ amount.toFixed(2) }}</p>
</template>

<script setup>
const props = defineProps({
  amount: { type: Number, required: true },
});
</script>