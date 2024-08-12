<template>

  <NuxtLink :to="`/id/${id}`" class="  rounded-sm w-[210px] flex flex-col justify-between">
    
    <div class="flex   bg-white rounded-lg  p-4">
        <div class="w-[210px] h-[280px]">
    <img class="w-full max-h-full" :src="image" :alt="title">
    </div>
    </div>


    <div class="flex flex-col justify-between  h-full">

        <div class="flex items-center">
   <div v-for="i in Math.floor(rating)" :key="i+1">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="orange" d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937l-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39l3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36z"></path></svg>
</div>
<div v-for="i in stars-Math.floor(rating)" :key="i+1">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="grey" d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937l-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39l3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36z"></path></svg>
</div>
({{ Math.floor(rating) }})
</div>


    <p class="text-sm">{{ title }}</p>

<p class="font-bold">${{ price }}</p>
</div>

  </NuxtLink>
  
</template>

<script  setup>
const {image,title}=defineProps({
    image:{type:String,required:true},
    title:{type:String},
    id:{type:Number,required:true},
    rating:{type:Number},
    price:{type:Number}
})
const stars=ref(5)
</script>

<style scoped>

</style>