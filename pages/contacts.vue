<template>
  <div class="flex flex-wrap gap-4">
 <div v-for="i in filtered" :key="i" class="">
    <div class="flex flex-wrap gap-4">
    <div v-for="c in i" :key=c.id>
        <TheCard
    
     :id="c.id"
     :key="c.id"
     :title="c.title"
     :image="c.image"
     :rating="c.rating.rate"
     :price='c.price'
  
     />
    </div>
</div> 
</div>

  </div>
</template>

<script  setup>
import { useProductsStore,storeToRefs } from '#imports';
const {categories,products}=storeToRefs(useProductsStore())
const filtered=computed(()=>{
    return categories.value.map(c=>products.value.filter(i=>i.category==c))
})
</script>

<style>

</style>