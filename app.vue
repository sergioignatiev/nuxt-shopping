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
  lang:'ru'
})
</script>


<style>



.router-link-exact-active{
  
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
                
                