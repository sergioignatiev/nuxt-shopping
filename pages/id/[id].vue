<template>
  <div>
    <h1 v-show="product.bascet===false" @click="addToTheBascet">ID VUE</h1>
    <h1 v-show="product.bascet">ADded</h1>
<img :src="product.image" :alt="product.title">
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