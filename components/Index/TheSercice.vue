<template>
    <div class="  w-[100%]">
  <div class=" h-40 bg-white rounded-[10px]">
    <div class="px-[64px] py-[52px] flex">
        <NuxtImg class="h-[60px] w-[60px]" :src="image" alt="service"/>
        <div class="pl-[18px]">
            <div class="text-black text-[22px] ">{{ header }}</div>
            <div class="w-[181px] text-black text-sm font-normal ">{{ content }}</div>
        </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
const {image,header,content}=defineProps({
    image:{type:String,default:"https://v3.woonuxt.com/icons/box.svg"},
    header:{type:String,default:"Lorem Ipsum"},
    content:{type:String,default:"Lorem ipsum dolores sit ameui"}
})
</script>

<style>

</style>