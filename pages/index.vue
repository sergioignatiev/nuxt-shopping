<template>
<h1 class="text-[70px] h-[100vh] bg-yellow-300  flex items-center justify-center font-extrabold ">
<div class="rotate-12">
<p>HE<span class="text-white">LL</span>O USER</p>
<p>GLAD TO S<span class="text-white">EE</span> YOU<span class="text-white">!</span></p>

</div>

</h1>
</template>

<script setup>
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {products,mapped,categories}=storeToRefs(store)

</script>

