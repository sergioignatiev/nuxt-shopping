<template>
  <NuxtLayout :name="layout">
<button @click="layout='default'">default</button>
<button @click="layout='mobile'">mobile</button>


<main class=" min-h-[100vh]  ">
  <h1>{{width}}</h1>
 <NuxtPage/>
 </main>
  </NuxtLayout>
</template>

<script setup>
const layout=ref('mobile')
const width=ref(0)
onMounted(() => {
  window.addEventListener("resize", sizeChange);
  sizeChange();
});
function sizeChange(){
  width.value=window.innerWidth
}
/*const layout=computed(()=>{
  if(width.value>900){
    return 'default'
  }
  else {return 'mobile'}
})*/
</script>

