<template>
  
  <NuxtLayout :name="layout">
    <div class="bg-[#505050] px-12 w-[100%] py-5 rounded-md">
     

</div>
  <div>
   
   <main >
   <NuxtPage />
   </main>
  </div>
 
  </NuxtLayout>

</template>
<script setup>

const width=ref(1000)
onMounted(()=>{
  width.value=window.innerWidth
  window.addEventListener('resize',()=>{width.value=window.innerWidth})
})
const layout=computed(()=>{
  if(width.value>650){
    return 'default'
  }else{ return 'mobile'}
})
</script>
<style>
.router-link-exact-active{
opacity: 0.7;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  transform: translateX(-1px);

}
</style>
