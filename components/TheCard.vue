<template>
  <div class="bg-[#5b5b5b] rounded-lg  px-3 py-4 flex flex-col gap-10 sm:max-w-[300px] w-[100%]">
    <h1 class="text-white font-extrabold text-[20px]">{{ title }}</h1>
    <div class="" >
    <img class="w-full" :src="image" alt="alt">
    </div>
    <TheButton>ADD</TheButton>
    <p class=" capitalize font-medium text-white">{{ description }}</p>
  </div>
</template>

<script  setup>
defineProps(['image','title','description'])
</script>

<style>

</style>