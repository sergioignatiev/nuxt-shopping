import fakeapi from "~/lib/fakeapi"
export const useCounterStore = defineStore('counter', () => {
   const products=ref(fakeapi)
  
    return { products }
  })