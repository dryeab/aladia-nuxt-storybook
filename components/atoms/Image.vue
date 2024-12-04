<template>
  <img :src="src" :alt="alt" :class="imgClass" />
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  imgClass: { type: String, default: '' },
});
</script>
