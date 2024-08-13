<template>
  <div class="w-[230px] bg-slate-100">
    <div  @click="switcher=!switcher">{{ name }}</div>
    <div v-show="switcher"><slot/></div>
  </div>
</template>

<script lang="ts" setup>
const switcher=ref(true)
const {name}=defineProps({
    name:String
})
</script>

<style>

</style>