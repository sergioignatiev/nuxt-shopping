<template>
  <div>
    <div v-if="bascet.length===0">empty</div>
    <div v-else >
        <h1>TEST</h1>
    <p v-for="b in bascet" :key="b.id">
<p @click="b.bascet=false">DELETE</p>
        <img  class="w-[100px]" :src="b.image" :alt="b.title">
    </p>
  </div>
  </div>
</template>

<script  setup>
import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products,mapped,categories,bascet}=storeToRefs(store)

</script>

<style>

</style>