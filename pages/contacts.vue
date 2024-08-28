<template>
  <div class="">
    <div v-for="i in categories" :key="i" class="">
    <label>{{ i }}</label>
    <input :id="i" type="checkbox" name="" @click="filter(i)">
  </div>
<div class="flex flex-wrap">
  
  <div v-for="x in ftg()" :key="x.id" class="">
 <TheCard :card="x"/>
  </div>
  
</div>
</div>
</template>

<script  setup>
import { useProductsStore,storeToRefs } from '#imports';
const {products,categories}=storeToRefs(useProductsStore())
const filtered=ref([])
function ftg(){
 const arr=[]
const ctg=filtered.value.map(x=>products.value.filter(s=>s.category==x))
for(let i=0;i<ctg.length; i++){
  for (let j=0;j<ctg[i].length;j++){
arr.push(ctg[i][j])
  }
}
if(filtered.value.length==0){
  return products.value
}else{
  return [...arr].reverse()
}
}
function filter(x){
  if(filtered.value.includes(x)){
    filtered.value.splice(filtered.value.indexOf(x),1)
  }else{
    filtered.value.push(x)
  }
}

</script>

<style>

</style>