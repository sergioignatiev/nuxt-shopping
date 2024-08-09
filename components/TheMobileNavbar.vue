<template>
 <section class="fixed top-0 w-full">

  <div class="w-full bg-white  text-blue-700 z-40 px-3 shadow-sm">
   
  <div class="flex py-3 items-center justify-between" >
    
    <BurgerMenu v-if="!visibility" @click="changeVisibility"/>
    <CloseMenu v-else @click="changeVisibility"/>
    <div class=" hidden justify-around gap-4 md:flex ">
    <NuxtLink class="text-[20px] font-bold" to="/">Главная</NuxtLink>
    <NuxtLink class="text-[20px] font-bold" to="/bascet">Корзина</NuxtLink>
    
    </div>
    <input
     @change="findMatches" 
     type="search" 
     class="w-[80%]
      md:w-[40%]
       px-3 rounded-lg
        text-white h-[3em]
         bg-slate-400" placeholder="искать товар" v-model="search">
    
    

  </div>
  </div>
  <SearchBox
  :findMatches="findMatches"
  :search="search"
  @click="search=''"
  />
  <div class="md:max-w-[400px] z-50  " v-show="visibility">
 
 <nav @click="changeVisibility" class="flex bg-white  flex-col">
   <div class=" md:hidden justify-around gap-4 flex  ">
 <NuxtLink class="text-[20px] font-bold" to="/">Главная</NuxtLink>
 <NuxtLink class="text-[20px] font-bold" to="/bascet">Корзина</NuxtLink>
 </div>
 <div class="flex flex-col shadow-lg  min-h-[90vh] ">
 <NuxtLink class="px-2 py-3 text-[20px] font-extrabold capitalize" v-for="category in categories" :to="`/category/${category}`" :key="category">{{ category }}</NuxtLink>
</div>  
</nav>
 </div>
</section>
</template>


 

<script  setup>
import BurgerMenu from './Menu/BurgerMenu.vue';
import SearchBox from './Menu/SearchBox.vue';
import { useProductsStore } from '#imports';
import { storeToRefs } from '#imports';
;
import CloseMenu from './Menu/CloseMenu.vue';
const store=useProductsStore()
const {categories,products}=storeToRefs(store)
const visibility=ref(false)
function changeVisibility(){
  visibility.value=!visibility.value
}

const search=ref('')
const findMatches=computed(()=>{
  
  return products.value.filter(i=>i.title.toLowerCase().includes(search.value.toLocaleLowerCase()))
})
</script>

<style scoped>

</style>