<template>
 <form class="px-3">
<label for="title"> Title:</label>
<input type="text" name="title" id="title" v-model="title">
<h1>{{ title }}</h1>
 </form>
</template>

<script  setup>
const title=ref('')
</script>

<style scoped>
label{
    @apply font-extrabold
}
input{
    @apply border-emerald-950 border-[1px] shadow-black w-[100%] h-10 rounded-lg
}

</style>