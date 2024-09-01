<template>
<div class="">
    <IndexTheTop
     
    image="https://v3.woonuxt.com/.netlify/images?w=2800&h=1600&url=%2Fimages%2Fhero-4.jpg"
    />

    <div class="flex flex-wrap justify-between  items-center py-[50px] paddings">
    <NuxtImg v-for="n in images" :key="n.id" class="mt-5 md:mt-0" :style="{height:`${size(n.big)}`}" :alt="n.alt"   :src="n.path"/>
  </div>
  <div class="text-black text-[22px] font-bold paddings">По Категориям</div>
  <div class="paddings flex flex-wrap gap-2 justify-start mt-[34px]">

    <TheCategoryCard
    v-for="n in categories"

    :key='n'
    :card="n"
:image="addImage(n)"
    />
  </div>

  <div class="paddings flex lg:flex-row flex-col gap-2 justify-between mt-[97px]">
    <TheSercice/>
    <TheSercice/>
    <TheSercice/>
  </div>

  <div class="paddings">
    <div class="text-black text-[22px] font-bold mt-[105px]">Популярные продукты</div>
    <div class="flex flex-wrap gap-2 mt-[36px] justify-between ">
   
<TheCard v-for="c in products.slice(0,6)" :key="c.id" :card="c"/>
    
    </div>
  </div>

  
 
  </div>
  </template>
  
  <script setup>
import { useProductsStore,storeToRefs } from '#imports';

  import TheSercice from '~/components/Index/TheSercice.vue';
const {products,categories}=storeToRefs(useProductsStore())

  useSeoMeta({
    title:"BALD-E",
    lang:'ru',
    description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  })
 function addImage(x){
    const fr=products.value.filter(f=>f.category===x)
return fr[fr.length-1].image
  }

  const images=ref([{
    id:1,path:'/images/index/index1.png',alt:"ALT",big:true},
  {id:2,path:'/images/index/index5.png',alt:"ALT",big:true},
  {id:3,path:'/images/index/index3.png',alt:"ALT"},
  {id:4,path:'/images/index/index4.png',alt:"ALT"},
  {id:5,path:'/images/index/index2.png',alt:"ALT"},
  {id:6,path:'/images/index/index7.png',alt:"ALT"},
  ])

  function size(z){
    if(z===true){
      return '55px'
    }else{
      return '35px'
    }
  }
  </script>
  
  <style>
  
  </style>