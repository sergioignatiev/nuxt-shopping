<template>
    <div class="paddings py-5 flex  ">
  
   

<form class=" ">
      <TheFilterWrapper name="ЦЕНА">
        <input type="range" min="0" max="1000" v-model="price" name="" id="">
        </TheFilterWrapper>

        <TheFilterWrapper name="Категории">
            <div class="flex gap-4 w-[230px]" >
          <input type="checkbox" name="categories" id="women"  value="women" v-model="women">
          <label for="women">Женская Одежда</label>
        
      </div>

        <div class="flex gap-4 " >
          <input type="checkbox" name="categories" id="jewelery"  value="jewelery" v-model="jewelery">
          <label for="jewelery">Украшения</label>
        
      </div>
  
      <div class="flex gap-4">
          <input type="checkbox" name="categories" id="electronics"  value="electronics" v-model="electronics">
        <label for="electronics">Электроника</label>
        
      </div>
      <div class="flex gap-4">
          <input class="accent-[red]" type="checkbox" name="categories" id="mens"  value="mens" v-model="mens">
        <label for="mens">Мужская одежда</label>
        
      </div>
  </TheFilterWrapper>
  <TheFilterWrapper name="Rating">
            

                <label for="1" class="flex ">
                    <input type="radio" value=1 name="rating" id="1" v-model="fiveStar">
                    <IconsTheStar v-for="star in 1" fill="orange" :key="star" />
                    <IconsTheStar v-for="star in 4" fill="grey" :key="star" />
                </label>

                <label for="2" class="flex ">
                    <input type="radio" value=2 name="rating" id="2" v-model="fiveStar">
                    <IconsTheStar v-for="star in 2" fill="orange" :key="star" />
                    <IconsTheStar v-for="star in 3" fill="grey" :key="star" />
                </label>
    
   
                <button @click="fiveStar=null">Сбросить</button>
</TheFilterWrapper>
  
      </form>
     
      <div class="flex flex-wrap gap-10">
     <TheCard
     v-for=" c in filtered"
     :title="c.title"
     :image="c.image"
     :id="c.id"
     :rating="c.rating.rate"
     :price='c.price'
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
  const women=ref(false)
  const fiveStar=ref(null)

  const price=ref(1000)

  const stars=computed(()=>{
    if(fiveStar.value){
    return products.value.filter(f=>f.rating.rate==fiveStar.value)
  }else{return products.value}

})

const product=computed(()=>{
    return stars.value.filter(f=>f.price<price.value)
})

const filteredWomen=computed(()=>{
    if(women.value===false){
      return []
    }else{
      return product.value.filter(j=>j.category==='Женская Одежда')
    }
  })

  const filteredJewelery=computed(()=>{
    if(jewelery.value===false){
      return []
    }else{
      return product.value.filter(j=>j.category==='Украшения')
    }
  })
  const filteredElectronics=computed(()=>{
    if(electronics.value===false){
      return []
    }else{
      return  product.value.filter(j=>j.category==='Электроника')
    }
  })
  const filteredMens=computed(()=>{
    if(mens.value===false){
      return []
    }else{
      return  product.value.filter(j=>j.category==='Мужская Одежда')
    }
  })
  
  const filtered=computed(()=>{
    if(electronics.value==false&&jewelery.value===false&&mens.value===false&&women.value===false){
      return [...product.value]
      }
      else{
        return [...filteredJewelery.value,...filteredElectronics.value,...filteredMens.value,...filteredWomen.value]
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
  label.flex{
    @apply py-3

  }
  </style>