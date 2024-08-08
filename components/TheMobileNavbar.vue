<template>
 
  <div class="fixed top-0 w-full bg-white  text-black z-50">
   
  <div class="flex py-3 items-center" >
    
    <BurgerMenu v-if="!visibility" @click="changeVisibility"/>
    <CloseMenu v-else @click="changeVisibility"/>
    <input @change="findMatches" type="search" class="w-[80%] px-3 rounded-lg text-white h-[2em] bg-slate-900" placeholder="искать товар" v-model="search">
  
    <SearchBox
  :findMatches="findMatches"
  :search="search"
  @click="search=''"
  />
  
  </div>
   <div v-show="visibility">
 
    <nav @click="changeVisibility" class="flex flex-col">
      <div class=" flex justify-around">
    <NuxtLink class="text-[20px] font-bold" to="/">Главная</NuxtLink>
    <NuxtLink class="text-[20px] font-bold" to="/bascet">Корзина</NuxtLink>
    </div>
    <NuxtLink class="px-2 py-3" v-for="category in categories" :to="`/category/${category}`" :key="category">{{ category }}</NuxtLink>
    </nav>
    </div>
  </div>
  
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