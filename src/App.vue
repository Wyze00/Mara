<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-[360px] h-[740px] bg-white shadow-md rounded-xl overflow-hidden border-2 bg-radial from-[#380C45] from-0% to-gray-800 to-100%">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
