<template>
  <div class="flex  gap-2 flex-wrap-reverse">
<TheCard 

v-for="product in count.products"
:title="product.title"

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