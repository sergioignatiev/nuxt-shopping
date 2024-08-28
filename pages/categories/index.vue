<template>
 
    <div class="paddings flex flex-wrap gap-2">
      <TheCategoryCard
    v-for="n in categories"
    :key="n"
    :card="n"
    :image="addImage(n)"
    />
   
    
    </div>
  
  </template>
  
  <script  setup>
 import { useProductsStore,storeToRefs } from '#imports';
 

  useSeoMeta({
    title:"Все Категории"
  })
 
  const store=useProductsStore()
  const {categories,products}=storeToRefs(store)
  function addImage(x){
    const fr=products.value.filter(f=>f.category===x)
return fr[fr.length-1].image
  }
  </script>
  
  <style>
  
  </style>