<template>
  <NuxtLayout :name="layout">
    



<main class=" min-h-[100vh]  ">

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
  title:"BALD-E"
})
</script>

