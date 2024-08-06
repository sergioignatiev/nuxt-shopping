<template>
    <div>
      <h1>CATEGORY:{{ route.params.category }}</h1>
     
      <p v-for="c in category" :key="c.id">
          <NuxtLink :to="`/${c.id}`">{{ c.title }}
              <img class="w-[30px]"  :src="c.image" :alt="c.title" >
        </NuxtLink>
      </p>
     
    </div>
  </template>
  
  <script setup>
  import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products}=storeToRefs(store)
  const route=useRoute()
  const category=ref([])
  
  onMounted(()=>{
  setTimeout(()=>{ category.value=products.value.filter(c=>c.category===route.params.category)},1)  
   
  })
 
  </script>
  
  <style>
  
  </style>