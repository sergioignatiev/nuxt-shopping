<template>
  <div>
   <form @submit.prevent="pushToProducts">
<input class="bg-blue-600" type="text" v-model="title">

<input type="text" v-model="image">
<button>SUBMIT</button>
   </form> 
  </div>
</template>

<script  setup>
import { useCounterStore} from '~/stores/product';
const count=useCounterStore()

const id=computed(()=>{
    return count.products.length+1;
} )
const title=ref('')
const image=ref('')
function pushToProducts(){
    count.products.push({id:id,title:title.value,image:image.value})
}
</script>

<style>

</style>