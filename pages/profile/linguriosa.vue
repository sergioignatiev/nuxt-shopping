<template>
  <div >
    <input ref="input" v-model="count" type="number">
   <NuxtImg :src="w" alt="w"/>
  </div>
</template>

<script setup>
const count=ref(0)
const input=ref(null)
const w=ref('https://v3.woonuxt.com/.netlify/images?w=2800&h=1600&url=%2Fimages%2Fhero-4.jpg')
onMounted(()=>{
  input.value.focus()
})
watch(count,(n)=>{
 if(n>=11){
    w.value='https://upload.wikimedia.org/wikipedia/commons/a/a0/Catalinamicaelaspain65.jpg'
  }
 else if(n>9){
    w.value="linguriosa.png"
  }else if(n<=9){
    w.value='https://v3.woonuxt.com/.netlify/images?w=2800&h=1600&url=%2Fimages%2Fhero-4.jpg'
  }
})
</script>

<style>

</style>