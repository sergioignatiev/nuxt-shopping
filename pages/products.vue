<template>
 
    <div class="paddings  flex py-3 ">
  
   
      
<div class=" basis-[230px] shrink-0 ">
  
      <TheFilterWrapper :name="`Цена < ${price}$`">
        <input class="w-full" type="range" min="0" max="1000" v-model="price" name="" id="">
        </TheFilterWrapper>

        <TheFilterWrapper name="Категории">
            <div class="flex gap-4 " >
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
  <TheFilterWrapper name="Рейтинг">
            

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
                <label for="3" class="flex  ">
                    <input class="p-3" type="radio" value=3 name="rating" id="3" v-model="fiveStar">
                    <IconsTheStar v-for="star in 3" fill="orange" :key="star" />
                    <IconsTheStar v-for="star in 2" fill="grey" :key="star" />
                </label>
                <label for="4" class="flex ">
                    <input class="font-[30px]" type="radio" value=4 name="rating" id="4" v-model="fiveStar">
                    <IconsTheStar v-for="star in 4" fill="orange" :key="star" />
                    <IconsTheStar v-for="star in 1" fill="grey" :key="star" />
                    <p>и выше</p>
                </label>

                <label for="5" class="flex ">
                    <input class="font-[30px]" type="radio" value=5 name="rating" id="5" v-model="fiveStar">
                    <div class="px-3 flex items-center"><IconsTheStar v-for="star in 5" fill="orange" :key="star" />
                    <IconsTheStar v-for="star in 0" fill="grey" :key="star" />
                                      
                  </div> 
                </label>
   
                <button class="bg-main px-5 py-2 rounded-lg text-white" @click="fiveStar=0">Любой Рейтинг</button>
</TheFilterWrapper>
 

</div>

      <div class="basis-[100%] shrink-1  flex flex-wrap gap-y-10 justify-around ">
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
  
  <script   setup>
 
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
  
  </style>