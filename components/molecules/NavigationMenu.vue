<template>
    <nav class="flex space-x-4">
        <NavigationItem v-for="item in items" :key="item.text" :href="item.href">
            {{ item.text }}
        </NavigationItem>
    </nav>
</template>

<script setup>

const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});
</script>