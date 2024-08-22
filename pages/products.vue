<template>
 
    <div class="paddings  flex py-3 ">
  
   
      
<div class=" basis-[230px] shrink-0 ">
  
      <TheFilterWrapper :name="`Цена < ${price}$`">
        <input id="" v-model="price" class="w-full" type="range" min="0" max="1000" name="">
        </TheFilterWrapper>

        <TheFilterWrapper name="Категории">
            <div class="flex gap-4 " >
          <input id="women" v-model="women" type="checkbox"  name="categories" value="women">
          <label for="women">Женская Одежда</label>
        
      </div>

        <div class="flex gap-4 " >
          <input id="jewelery" v-model="jewelery" type="checkbox"  name="categories" value="jewelery">
          <label for="jewelery">Украшения</label>
        
      </div>
  
      <div class="flex gap-4">
          <input id="electronics" v-model="electronics" type="checkbox"  name="categories" value="electronics">
        <label for="electronics">Электроника</label>
        
      </div>
      <div class="flex gap-4">
          <input id="mens" v-model="mens" class="accent-[red]" type="checkbox"  name="categories" value="mens">
        <label for="mens">Мужская одежда</label>
        
      </div>
  </TheFilterWrapper>
  <TheFilterWrapper name="Рейтинг">
            

                <label for="1" class="flex ">
                    <input id="1" v-model="fiveStar" type="radio" value=1 name="rating">
                    <IconsTheStar v-for="star in 1" :key="star" fill="orange" />
                    <IconsTheStar v-for="star in 4" :key="star" fill="grey" />
                </label>

                <label for="2" class="flex ">
                    <input id="2" v-model="fiveStar" type="radio" value=2 name="rating">
                    <IconsTheStar v-for="star in 2" :key="star" fill="orange" />
                    <IconsTheStar v-for="star in 3" :key="star" fill="grey" />
                </label>
                <label for="3" class="flex  ">
                    <input id="3" v-model="fiveStar" class="p-3" type="radio" value=3 name="rating">
                    <IconsTheStar v-for="star in 3" :key="star" fill="orange" />
                    <IconsTheStar v-for="star in 2" :key="star" fill="grey" />
                </label>
                <label for="4" class="flex ">
                    <input id="4" v-model="fiveStar" class="font-[30px]" type="radio" value=4 name="rating">
                    <IconsTheStar v-for="star in 4" :key="star" fill="orange" />
                    <IconsTheStar v-for="star in 1" :key="star" fill="grey" />
                    
                </label>

                <label for="5" class="flex ">
                    <input id="5" v-model="fiveStar" class="font-[30px]" type="radio" value=5 name="rating">
                    <div class=" flex items-center"><IconsTheStar v-for="star in 5" :key="star" fill="orange" />
                    <IconsTheStar v-for="star in 0" :key="star" fill="grey" />
                                      
                  </div> 
                </label>
   
                <button class="bg-main px-5 py-2 rounded-lg text-white" @click="fiveStar=0">Любой Рейтинг</button>
</TheFilterWrapper>
 

</div>

      <div class="basis-[100%] shrink-1  flex flex-wrap gap-y-10 justify-around ">
     <TheCard
     v-for=" c in filtered"
     :id="c.id"
     :key="c.id"
     :title="c.title"
     :image="c.image"
     :rating="c.rating.rate"
     :price='c.price'
  
     />
     
     </div>
     
    </div>
  </template>
  
  <script   setup>
  import { useProductsStore,storeToRefs } from '#imports';
  useSeoMeta({
    title:"Все Продукты"
  })
 
 
  const store=useProductsStore()
  const {products}=storeToRefs(store)
  
  const jewelery=ref(false)
  const electronics=ref(false)
  const mens=ref(false)
  const women=ref(false)

  const fiveStar=ref(0)

  const price=ref(1000)

  const stars=computed(()=>{
    if(fiveStar.value){
    return products.value.filter(f=>f.rating.rate>fiveStar.value-1)
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

  input{
    @apply accent-[#005489]
  }
  label{
    @apply text-sm
  }
  label.flex{
    @apply py-3  

  }
  input[type="radio"]{
    @apply accent-[#005489];

  }
  label[class='flex']{
    @apply items-center gap-1
  }
  label[class='flex']::after{
    content:" И Выше"
  }
  
  </style>