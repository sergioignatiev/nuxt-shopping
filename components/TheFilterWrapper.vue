<template>
  
  <div class="w-full py-3  ">
    <div class="font-bold py-3 flex items-between justify-between w-full "  @click="switcher=!switcher">
      <p>{{ name }}</p>
    <img class="w-[20px]" :class={rotate:!switcher}  src="/public/images/chevron-down.svg" alt="shevron">
    </div>
    <div v-show="switcher" class="w-full"><slot/></div>
  </div>
 
</template>

<script lang="ts" setup>
const switcher=ref(true)
const {name}=defineProps({
    name:{type:String,
      default:"None"
    }
    
})
</script>

<style scoped>
.rotate{
  @apply rotate-180
}

</style>