<template>
  <div class="paddings py-5 flex  ">

    <form class=" ">
      <div class="flex gap-4 w-[230px]" >
        <input type="checkbox" name="categories" id="jewelery"  value="jewelery" v-model="jewelery">
        <label for="jewelery">jewelery</label>
      
    </div>

    <div class="flex gap-4">
        <input type="checkbox" name="categories" id="electronics"  value="electronics" v-model="electronics">
      <label for="electronics">Электроника</label>
      
    </div>
    <div class="flex gap-4">
        <input class="accent-[red]" type="checkbox" name="categories" id="mens"  value="mens" v-model="mens">
      <label for="mens">Мужская одежда</label>
      
    </div>



    </form>
   
    <div class="flex flex-wrap gap-10">
   <TheCard
   v-for=" c in filtered"
   :title="c.title"
   :image="c.image"
   :id="c.id"
   :rating="c.rating.rate"
   :key="c.id"

   />
   </div>
  </div>
</template>

<script  lang="ts" setup>
useSeoMeta({
  title:"ВСЕ ПРОДУКТЫ"
})
import { useProductsStore } from '#imports';
import { storeToRefs } from '#imports';
const store=useProductsStore()
const {products}=storeToRefs(store)

const jewelery=ref(false)
const electronics=ref(false)
const mens=ref(false)
const filteredJewelery=computed(()=>{
  if(jewelery.value===false){
    return []
  }else{
    return products.value.filter(j=>j.category==='Украшения')
  }
})
const filteredElectronics=computed(()=>{
  if(electronics.value===false){
    return []
  }else{
    return  products.value.filter(j=>j.category==='Электроника')
  }
})
const filteredMens=computed(()=>{
  if(mens.value===false){
    return []
  }else{
    return  products.value.filter(j=>j.category==='Мужская Одежда')
  }
})

const filtered=computed(()=>{
  if(electronics.value==false&&jewelery.value===false&&mens.value===false){
    return [...products.value]
    }
    else{
      return [...filteredJewelery.value,...filteredElectronics.value,...filteredMens.value]
    }


})
</script>

<style scoped>
input[type=checkbox]{
  @apply accent-[#005489]
}
label{
  @apply text-sm
}
</style>