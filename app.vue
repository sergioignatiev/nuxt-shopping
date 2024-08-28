<template>

  <NuxtLayout :name="layout">
<main class=" min-h-[100vh] pb-[7em]" >

 <NuxtPage/>
 </main>
 
  </NuxtLayout>
</template>

<script setup>
const layout=ref('default')
const width=ref(0)
onMounted(() => {
  window.addEventListener("resize", sizeChange);
  sizeChange();
});
function sizeChange(){
  width.value=window.innerWidth
}
useSeoMeta({
  title:"BALD-E",
  lang:'ru',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>


<style>



.router-link-exact-active{
  color:#005489;
  @apply font-semibold
}
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
 opacity: 0;
  filter: blur(10px);
}
</style>
                
                