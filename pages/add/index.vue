<template>
 <form @submit.prevent="addToProducts" class="px-3">
<label for="title"> Title:</label>
<input type="text" name="title" id="title" v-model="title">

<label for="price"> Title:</label>
<input type="number" name="price" id="price" v-model="price">

<button>SUBNIT</button>
 </form>
</template>

<script  setup>
import { useProductsStore } from '#imports';
import { storeToRefs } from '#imports';
const store=useProductsStore()
const {products}=storeToRefs(store)
const title=ref('')
const price=ref('price')

function addToProducts(){
products.value.push({
    id:products.value.length+1,
    title:title.value,
    price:price.value,
    image:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Catalinamicaelaspain65.jpg',
    category:'jewelery'
  
})
}
</script>

<style scoped>
label{
    @apply font-extrabold
}
input{
    @apply border-emerald-950 border-[1px] shadow-black w-[100%] h-10 rounded-lg
}

</style>