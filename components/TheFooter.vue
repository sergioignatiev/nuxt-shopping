<template>
  <footer class="bg-white paddings ">
    <div class=" py-[92px] flex lg:flex-row flex-col justify-between gap-10 border-b-[1px] border-grey-300">

      <div class="block lg:basis-[444px] lg:mr-[241px]">
<NuxtImg class="w-[101px] h-[30.28px]" src="/logo2.png" alt="logo"/>
<div class="  text-sm font-normal pt-[22px]">
 <p> Данный магазин создан Игнатьевым Сергеем исключительно для учебных целей. Не преддназначен для коммерческого использования. 
  </p>
  <p>
    По вопросам сотрудничества обращайтесь ignatevsergey17@gmail.com  или в <a target="_blank" class="underline" href="https://t.me/SerjioIgnatev">Telegram</a>.
</p>
  </div>
</div>

<div class="sm:flex  lg:basis-2/3 gap-10 justify-between">
<TheLinks :links="links">Информация</TheLinks>
<TheLinks :links="links">Продукция</TheLinks>
<TheLinks :links="links">Клиентам</TheLinks>
</div>


</div>
<TheBottom/>
  </footer>
</template>

<script lang="ts" setup>
import TheLinks from './Footer/TheLinks.vue';
import TheBottom from './Footer/TheBottom.vue';
const links=ref([
  {
  id:1,name:"О Нас",link:"/"
},{
  id:2,name:"Карьера",link:"/"
},{
  id:3,name:"Пресса",link:"/",
},{
  id:4,name:"FAQ",link:"/"
}

])
</script>

<style>

</style>