<template>
    <div>
     <div v-for="c in category" :key="c.id">
        <NuxtLink :to="`/id/${c.id}`">{{ c.title }}</NuxtLink>
     </div>
    </div>
  </template>
  
  <script  setup>
  import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products,mapped,categories}=storeToRefs(store)
  const route=useRoute()
  const category=computed(()=>{
      return products.value.filter(f=>f.category==route.params.category)
  })
  </script>
  
  <style>
  
  </style>