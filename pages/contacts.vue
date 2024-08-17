<template>
<div class="">
<input id="" v-model="width" type="text" name="">
  <div class="" :inert="f">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum dolorem a, ea et facilis excepturi dolor consequatur distinctio in alias fugiat recusandae hic autem doloremque minima maiores consequuntur voluptatem.</div>
</div>


</template>

<script  setup>
const width=ref('')
const f=ref(false)
watch(width,(w)=>{
if(w.includes("linguriosa")){
  f.value=true
}else{
  f.value=false
}
})
</script>

<style scoped>


</style>