<template>
  <div>
    <div >
 <NuxtLink :to="`/categories/${card}`">
 <div class="relative h-[266px] w-[210px] bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
<NuxtImg class="h-full w-full" height="266" width="210" :src="image" :alt="card"/>
<h2 class="absolute font-bold text-base text-white  bottom-[18px] ">{{card}}</h2>
 </div>
 </NuxtLink>
    </div>
  </div>
</template>

<script  setup>
const {card,image}=defineProps({
    card:{type:Object,required:true},
    image:{type:String,required:true}
})
</script>

<style>

</style>