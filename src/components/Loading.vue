<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    setTimeout(() => {  
        router.push({
            path: '/landing/1'
        })
    }, 3000);

})
</script>

<template>
    <div class="flex items-center justify-center h-full relative">
        <div class="w-[200px] h-[200px]">
            <img src="../assets/logo.png" alt="" class="animate-pulse">
        </div>
        <div class="size-[300px] absolute right-0 bottom-0">
            <img src="../assets/loading.png" alt="" class="animate-pulse">
        </div>
    </div>
</template>

<style scoped>

</style>