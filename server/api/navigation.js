export default defineEventHandler(() => {
  const {dataBase,myName}=useRuntimeConfig()
    return {
      navigation: [
        {id:1,label:"HOME",link:"/"},
      {id:2,label:"PRODUCTS",link:"/products"}
      ],
      database:dataBase,
      myname:myName
    }
  })