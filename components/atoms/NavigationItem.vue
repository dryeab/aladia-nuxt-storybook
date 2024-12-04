<template>
    <a :href="href" class="text-gray-700 hover:text-indigo-600 px-3 py-2">
        <slot />
    </a>
</template>

<script setup>
const props = defineProps({
    href: { type: String, required: true },
});
</script>