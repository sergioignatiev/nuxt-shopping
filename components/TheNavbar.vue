<template>
 
<nav class="flex gap-4 px-4 py-3 font-bold bg-[#a59568] sticky -top-[1px]" >
  <NuxtLink class="text-[#505050]" v-for="nav in data.navigation" :to="nav.link" :key="nav.id">{{ nav.label }}</NuxtLink>
   </nav>
</template>

<script  setup>
 const { data } = await useFetch('/api/navigation',{
    
})
</script>

<style>

</style>