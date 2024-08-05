<template>
  <div class="h-[100vh]">
    {{ products.length }}
   <form @submit.prevent="pushToProducts">
<input class="bg-blue-600" type="text" v-model="title" placeholder="" required>

<input class="bg-green-500" type="text" v-model="image"placeholder="" required>
<button>SUBMIT</button>
   </form> 
  </div>
</template>

<script  setup>
import { useCounterStore} from '~/stores/product';
import { storeToRefs } from 'pinia';
const count=useCounterStore()
const {products}=storeToRefs(count)
const id=computed(()=>{
    return products.value.length;
} )
const title=ref('')
const image=ref('')
function pushToProducts(){
    products.value.push({id:id,title:title.value,image:image.value})
    title.value=''
    image.value=''
}
</script>

<style>

</style>