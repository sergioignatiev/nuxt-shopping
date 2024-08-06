<template>
    <button @click="addToTheBascet">Добавить</button>
    <div>
      <img :src="product.image" :alt="product.title">
    </div>
    
  </template>
  
  <script  setup>
  import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products,bascet}=storeToRefs(store)
  const route=useRoute()
  const product=computed(()=>{
      return products.value.find(i=>i.id==route.params.id)
  })
  function addToTheBascet(){
    product.value.bascet=true
  }
  </script>
  
  <style>
  
  </style>