<template>
  <select :id="id" v-model="internalValue" :class="selectClass">
    <slot></slot>
  </select>
</template>

<script setup>

const props = defineProps({
  id: { type: String, required: true },
  modelValue: { type: [String, Number], default: '' },
  selectClass: {
    type: String,
    default:
      'block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md',
  },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

// Watch for changes in internalValue and emit update event
watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});

// Watch for changes in modelValue prop and update internalValue
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  }
);
</script>