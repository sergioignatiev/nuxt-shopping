<template>
    <div>
      <div v-if="bascet.length===0">Корзина Пуста</div>
      <div v-else >
         <p>{{total}}</p>
      <p v-for="b in bascet" :key="b.id">
  <button @click="b.bascet=false">DELETE</button>
          <img  class="w-[100px]" :src="b.image" :alt="b.title">
       {{b.price}}
      </p>
    </div>
    </div>

  </template>
  
  <script  setup>
  import { useProductsStore } from '~/stores/products';
    import { storeToRefs } from 'pinia';
    const store=useProductsStore()
    const {products,categories,bascet}=storeToRefs(store)
    const total=computed(()=>{
        const total=ref(0)
    
    
    bascet.value.map(i=>total.value+=i.price)
    return total.value
    })
   
    


  </script>
  
  <style>
  
  </style>