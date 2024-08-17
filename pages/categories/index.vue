<template>
 
    <div class="paddings">
    <div v-for="n in categories" :key="n">
 <NuxtLink :to="`/categories/${n}`">{{ n }}</NuxtLink>
    </div>
    
    </div>
 
  </template>
  
  <script  setup>
 import { useProductsStore,storeToRefs } from '#imports';
 

  useSeoMeta({
    title:"Все Категории"
  })
 
  const store=useProductsStore()
  const {categories}=storeToRefs(store)
  </script>
  
  <style>
  
  </style>