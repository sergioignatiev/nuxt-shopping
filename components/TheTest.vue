<template>
  <div>
    <h1>SERGIO{{ name }}{{ phone }} {{ price }}</h1>
  </div>
</template>

<script lang="ts" setup>
const {name}=defineProps({
    name:{type:String,required:true},
    phone:{type:Number}
})
const price=ref(0)
</script>

<style>

</style>