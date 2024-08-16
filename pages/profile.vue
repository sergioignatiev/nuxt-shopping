<template>
  <div>
 <input type="text" v-model="profile">
 <h1>{{ profile }}</h1>
    <NuxtLink to="https://www.figma.com/design/2rsEmjD1BIAnEJDfZZiH9v/Landing-Page?node-id=0-1&t=ZXxEdTH3ogYjJc1Z-1" target="_blanc">figma</NuxtLink>
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from '#imports';
import { storeToRefs } from '#imports';
const store=useProductsStore()
const {profile}=storeToRefs(store)
</script>

<style>

</style>