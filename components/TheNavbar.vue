<template>
 
<nav class="flex sticky top-0 z-50 bg-white justify-between items-center h-[70px] paddings  ">

<NuxtLink to="/">
  <img src="/logo2.png" alt="BALDEE">
</NuxtLink>

<div class="flex items-center gap-4">
  <NuxtLink class="text-slate-500" v-for="n in navigation" :to="n.link" :key="n.id">{{ n.label }}</NuxtLink>
</div>

<div class="relative">
  <div class="flex items-center">
    <svg class="absolute px-1"  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#171616" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></path><path fill="#171616" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"></path></svg>
    <div @click="search=''" class="focus:outline-none absolute right-0 m-1  text-[10px] p-1 bg-main text-white rounded-md cursor-pointer outline-none" v-if="search">Очистить</div>
<input @change="findMatches" class="focus:outline-none flex items-center w-[400px] h-[38px] rounded-md p-1 px-[1.5em] shadow-inner shadow-slate-300  bg-slate-100" type="text" placeholder="Искать Товар..."  v-model="search">
</div>
<MenuSearchBox
:find-matches="findMatches"
:search="search"
@click="search=''"
/>
</div>


<div class="flex gap-4 items-center">
  
  <NuxtLink to="/profile">
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#171616" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
</NuxtLink>

<NuxtLink class="relative" to="/bascet">
<span class="absolute top-0 right-0 px-[4px] rounded-lg text-white bg-main text-[10px]" v-show="bascet.length>0">{{ bascet.length }}</span>
<svg  xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#171616" fillRule="evenodd" d="M4 3.75a.75.75 0 0 0 0 1.5h1.374l1.888 10.384A.75.75 0 0 0 8 16.25h10a.75.75 0 0 0 .728-.568l2-8A.75.75 0 0 0 20 6.75H7.171l-.433-2.384A.75.75 0 0 0 6 3.75zm4.626 11l-1.182-6.5H19.04l-1.625 6.5zm2.514-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-1.39 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5 1.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clipRule="evenodd"></path></svg>
</NuxtLink>

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
const {products,bascet}=storeToRefs(storeProducts)
const search=ref('')


const findMatches=computed(()=>{
  
  return products.value.filter(i=>i.title.toLowerCase().includes(search.value.toLocaleLowerCase()))
})
</script>

<style>

</style>