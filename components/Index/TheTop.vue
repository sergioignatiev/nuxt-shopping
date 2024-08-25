<template>
    <section class="relative flex items-center sm:h-[100vh] h-[70vh]">
  
  <div class="paddings bg-none h-full flex flex-col gap-5 justify-center z-10">
   <div class="text-black md:text-6xl text-3xl font-bold ">Новое Поступление</div>
   <div class="text-black md:text-3xl text-xl font-bold ">Новогодняя Коллекция</div>
   <div class="w-[295px] text-black text-base font-normal ">Наша новая коллекция уже здесь.Откройте новые тренды и стили в Новом Году.</div>
   <NuxtLink to='/products' class="px-[23px] w-fit mt-[26px] py-[18px] bg-gray-800 rounded-[10px] text-white">Начать Покупки</NuxtLink>
   </div>
  
   <NuxtImg  class="md:h-[100vh] h-full absolute w-[100%]"  :src="image" alt="MAIN IMAGE"/>
  
  </section>
  </template>
  
  <script  setup>
const {image}=defineProps({
  image:{type:String,default:'linguriosa.png'}
})

  </script>
  
  <style>
  
  </style>