<template>
 
<nav class="flex justify-around py-3 ">
<NuxtLink class="text-[20px] font-extrabold" v-for="n in navigation" :to="n.link" :key="n.id">{{ n.label }}</NuxtLink>
<div class="">
<input @change="findMatches" class="w-[300px] p-2 shadow-lg bg-slate-100" type="search" placeholder="Поиск" v-model="search">

<p class="absolute z-10 shadow-lg bg-white px-3 " v-if="search">
  
    <NuxtLink v-for="x in findMatches"   class="flex py-3 sticky top-0" :to="`/id/${x.id}`" @click="search=''" :key="x.id">
      <img class="w-[30px]" :src="x.image" :alt="x.title">
      {{ x.title }}</NuxtLink>
  
</p>


</div>
</nav>

</template>

<script  setup>
import { useNavigationStore } from '~/stores/navigation';
import { storeToRefs } from 'pinia';
const store=useNavigationStore()
const {navigation}=storeToRefs(store)

import { useProductsStore } from '~/stores/products';
const storeProducts=useProductsStore()
const {products}=storeToRefs(storeProducts)
const search=ref('')
const wait=ref('false')

const findMatches=computed(()=>{
  
  return products.value.filter(i=>i.title.toLowerCase().includes(search.value.toLocaleLowerCase()))
})
</script>

<style>

</style>