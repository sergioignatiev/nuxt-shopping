<template>
<div v-if="search" class="absolute  z-30 shadow-lg bg-white px-3 max-h-[400px] overflow-y-auto mr-4 rounded-lg mt-3 ">
  
  <NuxtLink v-for="x in findMatches"   :key="x.id" class="flex py-3 " :to="`/id/${x.id}`" >
    <img class="w-[30px]" :src="x.image" :alt="x.title">
    {{ x.title }}</NuxtLink>

  </div>
</template>

<script  setup>
const {findMatches,search}= defineProps(
  {findMatches:{type:Function,default:()=>{}}
  ,search:{type:String,default:""}})
</script>

<style>

</style>