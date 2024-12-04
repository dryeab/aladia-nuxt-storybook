<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow container mx-auto px-4 py-6 mt-10">
            <slot />
        </main>
        <Footer />
    </div>
</template>
