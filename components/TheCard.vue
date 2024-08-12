<template>
  <NuxtLink :to="`/id/${id}`" class="  rounded-sm w-[210px]">
    <div class="flex justify-center bg-white rounded-lg  p-4">
        <div class="w-[210px] h-[280px]">
    <img class="w-full max-h-full" :src="image" :alt="title">
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