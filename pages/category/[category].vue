<template>
    <div class="p-8 flex flex-wrap gap-4">
     
        <NuxtLink class="w-[300px] p-5 flex flex-col justify-between " v-for="c in category" :key="c.id" :to="`/id/${c.id}`">
        <img class="w-[290px]" :src="c.image" :alt="c.title">
        <h1 class="font-extrabold text-[19px]">{{ c.title }}</h1>
        <p>От {{ c.price }}$</p>
        </NuxtLink>
     
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