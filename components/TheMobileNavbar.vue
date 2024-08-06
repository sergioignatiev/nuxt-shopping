<template>
  <nav class="flex flex-col gap-5 px-4 sticky top-0">
    <NuxtLink class="uppercase text-[30px] font-extrabold" v-for="nav in data.navigation" :to="nav.link" :key="nav.id">{{ nav.label }}</NuxtLink>
  </nav>
</template>

<script  setup>
const {data}= await useFetch('/api/navigation')
</script>

<style>

</style>