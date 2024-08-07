<template>
 
<nav class="flex justify-around py-3 ">
<NuxtLink class="text-[20px] font-extrabold" v-for="n in navigation" :to="n.link" :key="n.id">{{ n.label }}</NuxtLink>
<input class="w-[300px] p-2 shadow-lg bg-slate-100" type="search" placeholder="Поиск">
</nav>
</template>

<script  setup>
import { useNavigationStore } from '~/stores/navigation';
import { storeToRefs } from 'pinia';
const store=useNavigationStore()
const {navigation}=storeToRefs(store)
</script>

<style>

</style>