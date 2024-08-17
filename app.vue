<template>
  <NuxtLayout :name="layout">
    



<main class=" min-h-[100vh]" >

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
/*@import url(https://db.onlinewebfonts.com/c/05e3738cb717a3ec76df1fa726367746?family=HelveticaNeueCyr-Roman);
*{
  font-family: "HelveticaNeueCyr-Roman",monospace
}
*/
*{
  font-family: Arial, Helvetica, sans-serif;
}
.router-link-exact-active{
  @apply underline
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
                
                