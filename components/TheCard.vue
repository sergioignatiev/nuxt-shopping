<template>
    
     
      <NuxtLink :to="`/id/${id}`" class="w-[210px] max-w-[40vw] flex flex-col justify-between">
<div class="flex flex-col justify-between">
    <div class="w-[210px] h-[200px] sm:h-[280px] p-1  left-0 top-0  rounded-[10px] overflow-hidden bg-white flex justify-center items-center">
      <NuxtImg class=" w-full max-h-full" :src="image"/>
    </div>

    <div class="flex items-center mt-[8px] ">
      <TheStar v-for="star in rating" :key="star"  fill="orange"/>
      <TheStar v-for="star in 5-rating" :key="star"  fill="#d1d5db"/>
    <div class="text-black text-sm font-normal ">({{ rating }})</div>
    </div>

    <div class="ml-[5px] mt-2 text-black text-sm font-normal ">{{ title }}</div>
  </div>
    
    <div class="ml-[5px]   text-black text-sm font-bold">${{ price }}</div>
   
</NuxtLink>
  
  </template>

<script lang="ts" setup>
import TheStar from './Icons/TheStar.vue';
defineProps({
    image:{type:String,required:true},
    title:{type:String,
        default:""},
    id:{type:Number,required:true},
    rating:{type:Number,required:true},
    price:{type:Number,default:0},
    category:{type:String,default:''}
    
})

</script>

<style scoped>

</style>