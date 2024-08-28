<template>
  
    <div class="paddings">
     
      <div v-if="bascet.length===0" class="text-[30px] pt-5">
        <p>Корзина Пуста</p>
      <NuxtLink class="px-3 py-2 rounded-md bg-main text-sm text-white" to="/products">Перейти к покупкам</NuxtLink>
      </div>
      <div v-else class="flex flex-wrap gap-3 py-3 relative" >
         
      <div v-for="b in bascet" :key="b.id">
  <button class="rounded-lg px-4 py-1 bg-red-800 text-white absolute" @click="b.bascet=false">DELETE</button>
         <TheCard 
      :card="b"
         
         />
      </div>
    </div>
    </div>

  </template>
  
  <script  setup>
  import { useProductsStore } from '~/stores/products';
    import { storeToRefs } from 'pinia';
    const store=useProductsStore()
    const {bascet}=storeToRefs(store)
   useSeoMeta({
    title:" Корзина"
   })
    


  </script>
  
  <style>
  
  </style>