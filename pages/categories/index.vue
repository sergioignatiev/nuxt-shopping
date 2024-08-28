<template>
 
    <div class="paddings flex flex-wrap gap-1">
    <div v-for="n in categories" :key="n">
 <NuxtLink :to="`/categories/${n}`">
 <div class="relative h-[266px] w-[210px] bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
<NuxtImg class="h-full w-full" :src="addImage(n)"/>
<h2 class="absolute text-extrabold text-white text-2xl bottom-[18px] ">{{n}}</h2>
 </div>
 </NuxtLink>
    </div>
    
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