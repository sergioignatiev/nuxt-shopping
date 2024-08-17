<template>
  <div>
    <h1>SERGIO{{ name }}{{ phone }} {{ price }}</h1>
  </div>
</template>

<script lang="ts" setup>
const {name,phone}=defineProps({
    name:{type:String,required:true},
    phone:{type:Number,default:0}
})
const price=ref(0)
</script>

<style>

</style>