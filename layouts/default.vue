<template>
 <div class="bg-[#e6e6e6] ">


<TheNavbar/>

  <slot/>
  <TheFooter/>
 </div>
</template>

<script  setup>
import { useRoute } from '#app';
const route=useRoute()
</script>

<style>

</style>