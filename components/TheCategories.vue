<template>
   <div class="capitalize flex z-20  gap-5 font-extrabold sticky top-0 bg-slate-300">
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

<style scoped>
.router-link-exact-active {
opacity: 0.5;
}
</style>