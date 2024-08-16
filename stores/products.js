import fakeapi from "~/lib/fakeapi"

export const useProductsStore = defineStore('products', () => {
  const products=ref(fakeapi)

  const mapped=ref(products.value.map(p=>p.category))
  const categories=computed(()=>{
    return mapped.value.filter((value,index)=>mapped.value.indexOf(value)===index)
 })
 const bascet=computed(()=>{
  return products.value.filter(p=>p.bascet===true)
 })
const profile=ref('')
     return { products,mapped,categories,bascet,profile}
   })