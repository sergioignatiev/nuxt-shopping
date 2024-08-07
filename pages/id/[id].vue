<template>
  
   
    <div class="grid grid-cols-3 p-5 gap-7">

        <div class=" ">
<img class="" :src="product.image" :alt="product.title">
</div>

<div class="">
    <h1 class="text-[30px] font-extrabold">{{ product.title }}</h1>
    <p class="mt-4">Рейтинг </p>
    <p class="text-[18px] font-bold mt-4">{{ product.description }}</p>
    
</div>

<div class=" rounded-lg shadow-lg">
    <button class="rounded-md px-3 py-2 shadow-md text-white bg-blue-500" v-show="product.bascet===false" @click="addToTheBascet">Добавить</button>
    <button class="rounded-md px-3 py-2 shadow-md text-white bg-green-500" v-show="product.bascet">Добавлено</button>
</div>

  </div>

</template>

<script setup>
 import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products,mapped,categories,bascet}=storeToRefs(store)
  const route=useRoute()
  const product=computed(()=>{
    return products.value.find(p=>p.id==route.params.id)
  })
  function addToTheBascet(){
product.value.bascet=true
  }
</script>

<style>

</style>