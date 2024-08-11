<template>
  <NuxtLink :to="`/id/${id}`" class=" w-[250px] rounded-sm">
    <div class="h-[250px] flex justify-center bg-white rounded-lg  p-4">
        <div class="h-full">
    <img class="h-full w-auto " :src="image" :alt="title">
    </div>
    </div>
    <p>{{ title }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
const {image,title}=defineProps({
    image:{type:String,required:true},
    title:{type:String},
    id:{type:Number,required:true}
})
</script>

<style>

</style>