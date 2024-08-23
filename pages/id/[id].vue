<template>

  
    <div class="grid grid-cols-3 paddings gap-7 mt-7 ">
   
        <div class="">
         <Transition>
  <NuxtImg  v-show="opacity" class=" sm:sticky top-7 " width="100%" :src="product.image" :alt="product.title" />
</Transition>  
</div>
  
  <div class="">
    <h1 class="text-[30px] font-extrabold">{{ product.title }}</h1>
    <div class="mt-4 flex items-center "><Icon class="bg-yellow-500 w-[20px]"  name="uil:star"/><div class="">{{ product.rating.rate }}</div></div>
    <p class="text-[18px] font-bold mt-4">{{ product.description }}</p>
    
  </div>
  <section class="">
  <div class=" rounded-lg shadow-lg p-5 flex flex-col   justify-between gap-4">
  <div class="text-[25px] font-bold">{{ product.price }}$</div>
  <div class="bg-slate-100 px-3 py-2 rounded-md font-extrabold ">В рассрочку на 4 месяца по {{ product.price/4 }}$</div>
  
  <label for="city">Выбрать город</label>
  <select id="city" name="city">
    
    <option value="">Москва</option>
    <option value="">Казань</option>
    <option value="">Новороссийск</option>
  </select>
    <button v-show="product.bascet===false" class=" hover:opacity-90 rounded-md px-4 py-3 text-[20px] font-bold shadow-md text-white bg-main" @click="addToTheBascet">Добавить</button>
    <button v-show="product.bascet" class=" hover:opacity-90 rounded-md px-4 py-3 text-[20px] font-bold shadow-md text-white bg-green-500">Добавлено</button>
  </div>
  </section>
  
  </div>

  </template>
  
  <script setup>
  
  import { useProductsStore } from '~/stores/products';
  import { storeToRefs } from 'pinia';
  const store=useProductsStore()
  const {products}=storeToRefs(store)
  const route=useRoute()
  const product=computed(()=>{
    return products.value.find(p=>p.id==route.params.id)
  })
  function addToTheBascet(){
  product.value.bascet=true
  }
  useSeoMeta({
    title:`${product.value.title}`
  })
  const opacity=ref(false)
  onMounted(()=>{
opacity.value=true
  })
 
  </script>
  
  <style scoped>
    .v-enter-from {
    opacity: 0;
    height:80%;
    translate: -10px 0;
  }
  .v-enter-to {
    opacity: 1;
    translate: 0 0;
    height:100%;
  }
  .v-leave-from {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-to {
    opacity: 0;
    translate: 10px 0;
  }
  img{
    transition: all 1s;
  }
  </style>