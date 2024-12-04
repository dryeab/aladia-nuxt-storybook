<template>
    <header class="bg-white shadow fixed z-50 w-full">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo>MyStore</Logo>
            <NavigationMenu :items="navItems" />
        </div>
    </header>
</template>

<script setup>

const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
];
</script>