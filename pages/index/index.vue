<template>
  <div class="">
   <div class="relative w-fit h-fit m-5 flex items-center">
    <p class="absolute text-violet-700">$</p>
    <input min="0" class=" py-2 w-[60px] rounded-md pl-3 pr-1   border-none outline-none" type="number" v-model="amount">
  </div>
    <img class="h-[100vh] " src="https://raw.githubusercontent.com/scottyzen/woonuxt/f3c6d3bc640b5a6543c0cfc5f9f32792336ca864/woonuxt_base/public/images/empty.svg" alt="">
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const amount=ref(0)
</script>

<style>

</style>