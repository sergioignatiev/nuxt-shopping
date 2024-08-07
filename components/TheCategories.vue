<template>
   <div class="capitalize flex  gap-5 font-extrabold sticky top-0 bg-slate-300">
<NuxtLink v-for="category in categories"
:key="category" :to="`/category/${category}`" >{{ category }}</NuxtLink>
</div>
</template>

<script  setup>
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {categories}=storeToRefs(store)
</script>

<style>

</style>