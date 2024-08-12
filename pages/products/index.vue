<template>
  <div>
    <form  >
      {{ count }}
      <input type="checkbox"  name="f" id="" />
      <input type="checkbox"  name="f" id="" />
      <input type="checkbox"  name="f" id="" />
      <input type="checkbox"  name="f" id="" />
    
    </form>
    <div class="flex flex-wrap gap-10">
   <TheCard
   v-for=" c in products"
   :title="c.title"
   :image="c.image"
   :id="c.id"
   :key="c.id"

   />
   </div>
  </div>
</template>

<script  lang="ts" setup>
import { useProductsStore } from '#imports';
import { storeToRefs } from '#imports';
const store=useProductsStore()
const {products}=storeToRefs(store)

const filtered=computed(()=>{
  return products.value.filter(f=>f.category=='electronics')
})
const count=ref('1')
useSeoMeta({
  title:"ВСЕ ПРОДУКТЫ"
})
</script>

<style>

</style>