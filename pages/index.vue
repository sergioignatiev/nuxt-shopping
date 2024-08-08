<template>

</template>

<script setup>
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {products,mapped,categories}=storeToRefs(store)

</script>

