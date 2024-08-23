<template>
<div class="">
    <IndexTheTop
    image="https://v3.woonuxt.com/.netlify/images?w=2800&h=1600&url=%2Fimages%2Fhero-4.jpg"
    />
    <div class="flex justify-between items-center py-[50px] paddings">
   
    <NuxtImg v-for="n in images" :key="n.id" :style="{height:`${size(n.big)}`}"   :src="n.path"/>
  </div>
  </div>
  </template>
  
  <script setup>
  useSeoMeta({
    title:"BALD-E"
  })

  const images=ref([{
    id:1,path:'/images/index/index1.png',alt:"ALT",big:true},
  {id:2,path:'/images/index/index6.png',alt:"ALT",big:true},
  {id:3,path:'/images/index/index3.png',alt:"ALT"},
  {id:4,path:'/images/index/index4.png',alt:"ALT"},
  {id:5,path:'/images/index/index5.png',alt:"ALT"},
  {id:6,path:'/images/index/index2.png',alt:"ALT"},
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