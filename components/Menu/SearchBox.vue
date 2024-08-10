<template>
<div class="absolute z-30 shadow-lg bg-white px-3 max-h-[400px] overflow-y-auto mr-4 rounded-lg mt-3 " v-if="search">
  
  <NuxtLink v-for="x in findMatches"   class="flex py-3 " :to="`/id/${x.id}`" @click="search=''" :key="x.id">
    <img class="w-[30px]" :src="x.image" :alt="x.title">
    {{ x.title }}</NuxtLink>

  </div>
</template>

<script  setup>
defineProps(['findMatches',"search"])
</script>

<style>

</style>