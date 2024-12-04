<template>
  <div class="flex items-center space-x-5 my-8">
    <Label :for-id="id" :text="labelText" :label-class="labelClass" />
    <Select :id="id" v-model="internalValue" :select-class="selectClass">
      <slot></slot>
    </Select>
  </div>
</template>

<script setup>

const props = defineProps({
  id: { type: String, required: true },
  labelText: { type: String, required: true },
  modelValue: { type: [String, Number], default: '' },
  labelClass: { type: String, default: 'font-medium text-gray-700 mb-2' },
  selectClass: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

// Local state variable
const internalValue = ref(props.modelValue);

// Watch for changes in internalValue and emit update events
watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});

// Watch for changes from parent prop and update internalValue
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  }
);
</script>
