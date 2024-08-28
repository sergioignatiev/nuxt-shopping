<template>
 
    <div class="paddings flex   py-3 ">
  
   
      
<div class=" basis-[230px] shrink-0 pr-[20px] ">
  
      <TheFilterWrapper :name="`Цена < ${price}$`">
        <input id="" v-model="price" class="w-full" type="range" min="0" max="1000" name="">
        </TheFilterWrapper>

        <TheFilterWrapper name="Категории">

            <div v-for="c in categories" :key='c'  class="flex gap-4">
          <input :id="c"  type="checkbox"  name="categories" @click="filter(c)">
          <label :for="c">{{c}}</label>
        
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
   
                <button class="bg-main px-5 py-2 mt-5 rounded-lg text-white" @click="fiveStar=0">Любой Рейтинг</button>
</TheFilterWrapper>
 

</div>

      
        <div class="basis-[100%] shrink-1  flex flex-wrap gap-y-10 gap-[20px] ">
         
          <TransitionGroup>
     <TheCard
     v-for=" c in changePrice"
     :key="c.id"
     :card="c"
  
     />
     </TransitionGroup>
     </div>
      
     
    </div>
  </template>
  
  <script   setup>
  import { useProductsStore,storeToRefs } from '#imports';
  useSeoMeta({
    title:"Все Продукты"
  })
 
 
  const store=useProductsStore()
  const {products,categories}=storeToRefs(store)
  const filtered=ref([])
  const fiveStar=ref(0)
  const price=ref(100)
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
  

  
  const rating=computed(()=>{
    return ftg().filter(i=>i.rating.rate>=fiveStar.value)
  })

 
  const changePrice=computed(()=>{
    return rating.value.filter(i=>i.price<price.value)
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
    @apply py-1

  }
  input[type="radio"]{
    @apply accent-[#005489];

  }
  label[class='flex']{
    @apply items-center 
  }
  label[class='flex']:not(:last-child):after{
    content:" И Выше"
  }
  
  .v-leave-from {
 opacity: 1;
 
 
  }
  .v-leave-to {
  opacity:0;
  filter: blur(10px);
    
  }
  *{
    transition:all 0.5s;
  }
  </style>