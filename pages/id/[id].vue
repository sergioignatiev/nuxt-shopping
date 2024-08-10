<template>
  
   
  <div class="grid grid-cols-3 p-5 gap-7 mt-7 ">

      <div class="">
       
<img class=" sm:sticky top-7 " :src="product.image" :alt="product.title">
</div>

<div class="">
  <h1 class="text-[30px] font-extrabold">{{ product.title }}</h1>
  <p class="mt-4 flex items-center "><Icon class="bg-yellow-500 w-[20px]"  name="uil:star"/><div class="">{{ product.rating.rate }}</div></p>
  <p class="text-[18px] font-bold mt-4">{{ product.description }}</p>
  
</div>
<section class="">
<div class=" rounded-lg shadow-lg p-5 flex flex-col   justify-between gap-4">
<div class="text-[25px] font-bold">{{ product.price }}$</div>
<div class="bg-slate-100 px-3 py-2 rounded-md font-extrabold ">В рассрочку на 4 месяца по {{ product.price/4 }}$</div>

<label for="city">Выбрать город</label>
<select name="city" id="city">
  
  <option value="">Москва</option>
  <option value="">Казань</option>
  <option value="">Новороссийск</option>
</select>
  <button class=" hover:opacity-90 rounded-md px-4 py-3 text-[20px] font-bold shadow-md text-white bg-blue-500" v-show="product.bascet===false" @click="addToTheBascet">Добавить</button>
  <button class=" hover:opacity-90 rounded-md px-4 py-3 text-[20px] font-bold shadow-md text-white bg-green-500" v-show="product.bascet">Добавлено</button>
</div>
</section>
<img src="https://raw.githubusercontent.com/scottyzen/woonuxt/f3c6d3bc640b5a6543c0cfc5f9f32792336ca864/woonuxt_base/public/icons/pp.svg" alt="">
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