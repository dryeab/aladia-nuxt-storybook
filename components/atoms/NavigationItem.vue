<template>
    <NuxtLink :to="href"
        class="text-gray-700 hover:text-indigo-600 px-3 py-2 hover:cursor-pointer block md:inline-block">
        <slot />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    href: { type: String, required: true },
});
</script>
