<template>
<div class="flex flex-col sm:pt-0 pt-5 " >
<div class="font-bold  pb-[25px]"><slot/></div>
<NuxtLink v-for="l in links" :key="l.id" class="text-sm" :to="l.link">{{ l.name }}</NuxtLink>
</div>
</template>

<script  setup>
const {links}=defineProps({links:{type:Object,required:true}})
</script>

<style>

</style>