<template>
  
    <div class="paddings">
     
      <div class="text-[30px] pt-5" v-if="bascet.length===0">Корзина Пуста </div>
      <div class="flex flex-wrap gap-3 py-3 relative" v-else >
         
      <div v-for="b in bascet" :key="b.id">
  <button class="rounded-lg px-4 py-1 bg-red-800 text-white absolute" @click="b.bascet=false">DELETE</button>
         <TheCard 
         :title="b.title"
         :image="b.image"
         :id="b.id"
         :category="b.category"
         :rating="b.rating.rate"
         :price="b.price"
         :key="b.id"
         />
      </div>
    </div>
    </div>

  </template>
  
  <script  setup>
  import { useProductsStore } from '~/stores/products';
    import { storeToRefs } from 'pinia';
    const store=useProductsStore()
    const {profile,bascet}=storeToRefs(store)
    const total=computed(()=>{
        const total=ref(0)
    
    
    bascet.value.map(i=>total.value+=i.price)
    return total.value
    })
   
    


  </script>
  
  <style>
  
  </style>