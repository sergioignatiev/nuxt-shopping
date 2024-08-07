import { useProductsStore } from "./products"
import { storeToRefs } from "pinia"


export const useNavigationStore = defineStore('navigation', () => {
    const navigation=ref([
        {id:1,label:'Главная',link:"/"},
        {id:2,label:"Корзина",link:"/bascet"},
        {id:3,label:"Добавить товар",link:"/add"}
        
    ])
   
     return { navigation }
   })