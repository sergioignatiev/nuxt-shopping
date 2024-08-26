<template>
  <div>
  <section>
    <div v-for="category in categories" :key="category" class="">
        <label :for="category">{{ category }}</label>
        <input :id="category" type="checkbox" name="" @change="addTo(category)">
    </div>
  </section>
<div v-show="filtered.length>0" class="flex flex-wrap">
<p v-for="c in filtered" :key="c.id">{{ c }}</p>
</div> 

  </div>
</template>

<script setup>
import { useProductsStore,storeToRefs } from '#imports';
const {categories,products}=storeToRefs(useProductsStore())
const prod=ref(['Украшения'])

function addTo(x){

if(prod.value.includes(x)){
    prod.value.splice(prod.value.indexOf(x),1)
}else{
    prod.value.push(x)
}
}

const filtered=computed(()=>{
    const mapped=[...products.value]
 
 return mapped
})

</script>

<style>

</style>