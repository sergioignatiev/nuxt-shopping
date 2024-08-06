<template>
  <div class="p-4">
{{bascet}}

 <div class="capitalize flex gap-5 font-extrabold sticky top-0 "
 
 >
<NuxtLink to="/">hhhh</NuxtLink>
<NuxtLink to="/bascet">bascet</NuxtLink>
<NuxtLink v-for="m in categories"
:key="m" :to="`/category/${m}`">{{ m }}</NuxtLink>
</div>
 <NuxtPage/>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {products,mapped,categories,bascet}=storeToRefs(store)

</script>

