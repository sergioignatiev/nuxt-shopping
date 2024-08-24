<template>
  <div class="flex flex-wrap paddings py-3 gap-5">
   
    <div v-for="product in products" :key="product.id" class="w-[210px]  ">
  <div class="w-[210px] h-[280px] left-0 top-0  rounded-[10px] overflow-hidden bg-white flex justify-center items-center">
    <NuxtImg class=" w-full max-h-full" :src="product.image"/>
  </div>
  <div class="flex items-center mt-[8px] gap-1">
    <TheStar v-for="star in product.rating.rate" :key="star.length+1"  fill="orange"/>
    <TheStar v-for="star in 5-product.rating.rate" :key="star.length+1"  fill="#d1d5db"/>
  <div class="   text-black text-sm font-normal ">({{ product.rating.rate }})</div>
  </div>
  <div class="ml-[5px] mt-[11px]  text-black text-sm font-normal ">{{ product.title }}</div>

  
  <div class="ml-[5px] mt-[13px]  text-black text-sm ">${{ product.price }}</div>
</div>
  </div>
</template>

<script  setup>
import TheStar from '~/components/Icons/TheStar.vue';
import { useProductsStore,storeToRefs } from '#imports';
const {products}=storeToRefs(useProductsStore())

</script>

<style>

</style>