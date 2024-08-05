<template>
  <div>
   <h1  class="text-[40px] font-extrabold">{{ count }}</h1>
  <h1 class="text-white text-[20px] font-extrabold" v-for="id in products" :key="id.id">{{ id.id }}</h1>
  </div>
</template>

<script  setup>
import { useCounterStore } from '~/stores/product';
import { storeToRefs } from 'pinia';
const store=useCounterStore()
const {count,products,route}=storeToRefs(store)

</script>

<style>

</style>

