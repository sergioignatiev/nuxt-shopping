<template>
  
    <div class="paddings">
     
      <div v-if="bascet.length===0" class="text-[30px] pt-5">Корзина Пуста </div>
      <div v-else class="flex flex-wrap gap-3 py-3 relative" >
         
      <div v-for="b in bascet" :key="b.id">
  <button class="rounded-lg px-4 py-1 bg-red-800 text-white absolute" @click="b.bascet=false">DELETE</button>
         <TheCard 
         :id="b.id"
         :key="b.id"
         :title="b.title"
         :image="b.image"
         :category="b.category"
         :rating="b.rating.rate"
         :price="b.price"
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
   
    


  </script>
  
  <style>
  
  </style>