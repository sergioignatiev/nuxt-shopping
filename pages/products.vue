<template>
  <div class="flex flex-wrap">
<TheCard 

v-for="product in count.products"


:image="product.image"
:key="product.id"

/>
  </div>
</template>

<script  setup>
import { useCounterStore } from '~/stores/product';
const count=useCounterStore()

</script>

<style>

</style>