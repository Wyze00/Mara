<script setup lang="ts">

</script>

<template>
    <div class="flex justify-evenly items-center h-full flex-col">
        
        <div class="flex gap-x-3">
            <div class="w-20 h-1 bg-purple-500 rounded-xl"></div>
            <div class="w-20 h-1 bg-white rounded-xl"></div>
        </div>

        <div>
            <div class="size-[300px]">
                <img src="../assets/landing1.png" alt="">
            </div>
        </div>

        <div class="flex justify-center flex-col items-center px-5">
            <p class="font-bold text-purple-500 font-[Roboto]">Digital Agency, Super Fleksibel!</p>
            <p class="text-2xl text-center text-white font-[600] font-[Roboto]">Platform yang bisa bikin brand kamu viral!</p>
        </div>

        <div class="px-7 w-full flex justify-center items-center">
            <RouterLink to="/landing/2" class="bg-[#b064fc] text-white w-full h-10 text-center font-bold rounded-md flex justify-center items-center hover:scale-105 transition-all"><span>Get started</span></RouterLink>
        </div>

    </div>
</template>

<style scoped>

</style>