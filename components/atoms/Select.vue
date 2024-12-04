<template>
  <div class="relative">
    <select :id="id" v-model="internalValue" :class="selectClass" class="block w-full appearance-none bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150">
      <slot></slot>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: { type: String, required: true },
  modelValue: { type: [String, Number], default: '' },
  selectClass: {
    type: String,
    default:
      '',
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