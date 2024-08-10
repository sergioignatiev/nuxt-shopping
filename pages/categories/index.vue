<template>
    <div>
    <div v-for="n in categories" :key="n">
    {{ n }}
    </div>
    
    </div>
  </template>
  
  <script  setup>
  import { useProductsStore } from '#imports';
  import { storeToRefs } from '#imports';
  const store=useProductsStore()
  const {categories,products,mapped}=storeToRefs(store)
  const find=computed((x)=>{
    return products.value.filter(f=>f.category==x)
  })
  </script>
  
  <style>
  
  </style>