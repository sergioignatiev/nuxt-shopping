<template>
    <div class="flex flex-wrap gap-6 p-6">
      <TheCard
      v-for="c in category"
      :title="c.title"
      :image="c.image"
      :id="c.id"
      :rating="c.rating.rate"
      :price="c.price"
      :category="c.category"
      :key="c.id"
      />
     
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useProductsStore } from '#imports';
  import { storeToRefs } from '#imports';
  const store=useProductsStore()
  const {products}=storeToRefs(store)
  const route=useRoute()
  const category=computed(()=>{
      return products.value.filter(f=>f.category==route.params.category)
  })
  </script>
  
  <style>
  
  </style>