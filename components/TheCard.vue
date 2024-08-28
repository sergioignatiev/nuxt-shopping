<template>
    
     
      <NuxtLink :to="`/id/${card.id}`" class="w-[210px] max-w-[40vw] flex flex-col justify-between max-h-[400px]">
<div class="flex flex-col justify-between ">
    <div class="w-[210px] h-[200px] sm:h-[280px]   left-0 top-0  rounded-[10px] overflow-hidden bg-white flex justify-center items-center">
      <NuxtImg class=" w-full max-h-full" :src="card.image"/>
    </div>

    <div class="flex items-center mt-[8px] ">
      <TheStar v-for="star in card.rating.rate" :key="star"  fill="orange"/>
      <TheStar v-for="star in 5-card.rating.rate" :key="star"  fill="#d1d5db"/>
    <div class="text-black text-sm font-normal ">({{ card.rating.rate }})</div>
    </div>

    <div class="ml-[5px] mt-2 text-black text-sm font-normal ">{{ card.title }}</div>
  </div>
    
    <div class="ml-[5px]   text-black text-sm font-bold">${{ card.price }}</div>
   
</NuxtLink>
  
  </template>

<script lang="ts" setup>
import TheStar from './Icons/TheStar.vue';
defineProps({card:{type:Object,required:true}})

</script>

<style scoped>

</style>