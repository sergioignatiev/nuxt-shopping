<template>
    <div class="paddings">
    <div v-for="n in categories" :key="n">
 <NuxtLink :to="`/categories/${n}`">{{ n }}</NuxtLink>
    </div>
    
    </div>
 
  </template>
  
  <script  setup>
  useSeoMeta({
    title:"Все Категории"
  })
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