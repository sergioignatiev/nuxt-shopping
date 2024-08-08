<template>
  <NuxtLayout :name="layout">
<h1>{{width}}</h1>



<main class=" min-h-[100vh] ">
 <NuxtPage/>
 </main>
  </NuxtLayout>
</template>

<script setup>
const width=ref(0)
onMounted(() => {
  window.addEventListener("resize", sizeChange);
  sizeChange();
});
function sizeChange(){
  width.value=window.innerWidth
}
const layout=computed(()=>{
  if(width.value>900){
    return 'default'
  }
  else {return 'mobile'}
})
</script>

