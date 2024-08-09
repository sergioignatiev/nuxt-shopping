<template>
 <div class="absolute right-0  bg-white mx-5 shadow-lg rounded-md max-h-[70vh] overflow-y-auto   " v-if="search">
  
  <NuxtLink v-for="x in findMatches"   class="flex py-3 " :to="`/id/${x.id}`"  :key="x.id">
    <img class="w-[30px]" :src="x.image" :alt="x.title">
    {{ x.title }}</NuxtLink>

  </div>
</template>

<script  setup>
defineProps(['findMatches',"search"])
</script>

<style>

</style>