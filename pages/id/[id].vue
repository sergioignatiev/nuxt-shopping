<template>
  <div>
    <h1>ID VUE</h1>
<img :src="product.image" :alt="product.title">
  </div>
</template>

<script setup>
 import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products,mapped,categories}=storeToRefs(store)
  const route=useRoute()
  const product=computed(()=>{
    return products.value.find(p=>p.id==route.params.id)
  })
</script>

<style>

</style>