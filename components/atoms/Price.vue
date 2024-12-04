<template>
  <p class="mb-2 italic text-gray-500">${{ amount.toFixed(2) }}</p>
</template>

<script setup>
const props = defineProps({
  amount: { type: Number, required: true },
});
</script>