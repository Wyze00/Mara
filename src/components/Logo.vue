<script setup lang="ts">

</script>

<template>
    <div class="flex overflow-y-auto bg-black h-full w-full gap-y-5 justify-start items-center flex-col relative">

        <div class="nav flex justify-between w-full mt-5 px-4">
            <div class="w-[50px] h-[50px]">
                <img src="../assets/logo.png" alt="">
            </div>
        </div>

        <div class="relative w-full px-5">
            <div class="absolute size-9 bg-[#854cff] rounded-full -top-0.5 flex justify-center items-center">
                <img src="../assets/home-util3.png" alt="" class="size-4">
            </div>
            <input type="text" class="text-white rounded-2xl bg-[#432a6c] w-full px-8 py-1 focus:outline-none focus:ring-0 focus:border-transparent pl-13">
        </div>

        <div>
            <p class="text-white font-bold">Logo</p>
        </div>            
        
        <div class="w-full bg-[#854cff] py-5 flex items-center justify-center px-10">
            <img src="../assets/comming-soon.png" alt="">
        </div>

        <div>
            <p class="text-white font-bold text-2xl">Will Be Available Soon</p>
        </div>

        <div class="absolute bottom-0 flex w-full bg-[#20044c] h-[80px] text-white px-2 gap-x-3">
            <RouterLink to="/home" class="spg grow-1 flex items-center justify-center flex-col gap-y-1 border-t-2 border-t-purple-500">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                <p class="text-sm">Home</p>
            </RouterLink>
            <RouterLink to="/search" class="spg grow-1 flex items-center justify-center flex-col gap-y-1">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p class="text-sm">Search</p>
            </RouterLink>
            <RouterLink to="/keranjang" class="spg grow-1 flex items-center justify-center flex-col gap-y-1">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                <p class="text-sm">Keranjang</p>
            </RouterLink>
            <RouterLink to="/profile" class="spg stroke- grow-1 flex items-center justify-center flex-col gap-y-1">
                <svg class="size-6" stroke="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="about" stroke="#ffffff"><path stroke="#ffffff" d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></g></svg>
                <p class="text-sm">Profile</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .spg:hover {
        color: #ad46ff;

        svg, g, path, defs {
            stroke: #ad46ff;
        }
    }
    .scrollbar-none::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-none {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>