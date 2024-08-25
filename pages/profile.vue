<template>
  <div class="paddings py-10 flex flex-col items-center">
    <div class="flex flex-col">
      <NuxtImg class="h-[40px]" src="/logo.png"/>
    </div>
    <h2 class="pt-3 text-3xl font-bold">Зарегистрироваться</h2>
    <p>Уже есть аккаунт? <a class="color-main" href="">войти</a></p>
<form class="w-[500px] p-2" @submit.prevent="submit">
  <div class="">
<label for="name">ИМЯ:</label>
  <input id="name" ref="name" v-model="nombre" class="input" type="text" placeholder="ИМЯ" required>
</div>
<div class="mt-5">
  <label for="email">EMAIL:</label>
  <input v-model="email" type="email" class="input" placeholder="exemple@.com" required>
</div>
<div class="mt-5">
  <label for="password" >Пароль</label>
  <div class="relative flex items-center">
<input id="password" v-model="password" class="input" :type="pass" name="password" placeholder="********" required>
<img class="absolute  right-[10px] w-[30px]" :src="showHide" alt="showhide" @click="changePassword">
</div>


</div>
<button class="text-white bg-main text-[20px] mt-5 w-full py-3 rounded-[10px] font-extrabold">Зарегистрироваться</button>
</form>


    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title:"Регистрация"
})
const nombre=ref('Сергей Игнатьев')
const email=ref('ignatevsergey17@gmail.com')
const password=ref('12345')
const showHide=ref('https://www.svgrepo.com/show/380007/eye-password-hide.svg')
const pass=ref('password')
function changePassword(){
  if(pass.value=='password'){
pass.value='text'
showHide.value='https://www.svgrepo.com/show/380010/eye-password-show.svg'
  }else{
    pass.value='password'
    showHide.value="https://www.svgrepo.com/show/380007/eye-password-hide.svg"
  }
}
const name=ref()
onMounted(()=>{
  name.value.focus()
})

async function submit(){
 
  await navigateTo('/products')
}
</script>

<style scoped>
.input{
  @apply w-[100%] focus:outline-none px-3 py-3 rounded-[10px]
}
label{
  @apply flex mt-[10px]
}
</style>