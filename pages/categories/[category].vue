<template>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
      v-for="c in category"
      :id="c.id"
      :key="c.id"
      :title="c.title"
      :image="c.image"
      :rating="c.rating.rate"
      :price="c.price"
      :category="c.category"
      />
  
    </div>
  </template>
  
  <script  setup>
  
  import { useProductsStore,storeToRefs } from '#imports';
 
  const store=useProductsStore()
  const {products}=storeToRefs(store)
  const route=useRoute()
  const category=computed(()=>{
      return products.value.filter(f=>f.category==route.params.category)
  })
  useSeoMeta({
    title:`${route.params.category}`
  })
  </script>
  
  <style>
  
  </style>