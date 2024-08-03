<template>
  <div class="bg-[#5b5b5b] rounded-lg  px-3 py-4 flex flex-col gap-10 sm:max-w-[200px] w-[90%]">
    <img class="sm:h-[200px]" :src="image" alt="alt">
    <TheButton>ADD</TheButton>
    <p class="capitalize font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione?</p>
  </div>
</template>

<script  setup>
defineProps(['image'])
</script>

<style>

</style>