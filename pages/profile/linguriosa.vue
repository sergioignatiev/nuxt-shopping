<template>
 <div class="flex flex-wrap">
    
  <div v-for="p in products" :key="p.id" class="">{{ p.id }}</div>
 </div>
</template>

<script lang="ts" setup>
import { useProductsStore,storeToRefs } from '#imports';
const {products}=storeToRefs(useProductsStore())

</script>

<style>

</style>