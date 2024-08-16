<template>
<div class="">
<input type="text" name="" id="" v-model="width">
  <div class="" :inert="f">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum dolorem a, ea et facilis excepturi dolor consequatur distinctio in alias fugiat recusandae hic autem doloremque minima maiores consequuntur voluptatem.</div>
</div>


</template>

<script  setup>
const width=ref('')
const f=ref(false)
watch(width,(w,s)=>{
if(w.includes("linguriosa")){
  f.value=true
}else{
  f.value=false
}
})
</script>

<style scoped>


</style>