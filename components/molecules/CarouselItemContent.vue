<template>
    <div class="flex items-center justify-center h-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${product.image})` }">
        <div class="bg-gray-50 w-1/2 bg-opacity-50 p-4 rounded text-center">
            <Heading :text="product.title" size="lg" heading-class="text-white text-xl font-bold mb-2" />
            <Price :amount="product.price" price-class="text-blue-900 font-semibold" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: { type: Object, required: true },
});
</script>