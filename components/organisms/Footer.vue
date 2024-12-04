<template>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4 text-center flex justify-between">
            <p class="space-x-2">
                <span>&copy;</span>
                <span>{{ new Date().getFullYear() }}</span>
                <span>MyStore. All rights reserved.</span>
            </p>
            <p class="space-x-5">
                <a href="/privacy">Privacy Policy</a>
                <span>|</span>
                <a href="/terms">Terms of Service</a>
            </p>
        </div>
    </footer>
</template>