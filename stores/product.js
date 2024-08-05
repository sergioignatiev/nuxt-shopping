import fakeapi from "~/lib/fakeapi"
export const useCounterStore = defineStore('counter', () => {
   const products=ref(fakeapi)
   const count=ref(0)
   const route = useRoute()
   function increment(){
    count.value++
   }
   const id=computed(()=>{
    return products.value.length;
} )
    return { products,count,increment,route,id }
  })