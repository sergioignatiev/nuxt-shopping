<template>
  <div>
    <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
<input id="a" type="range" value="50">
+<input id="b" type="number" value="25">
=<output  for="a b"/>
</form>
    <NuxtLink to="/profile/linguriosa">
    <NuxtImg src="/linguriosa.png" alt="linguriosa" class="w-[320px]"/>
    </NuxtLink>
  </div>
</template>

<script  setup>
useSeoMeta({
  title:"Аккаунт"
})

</script>

<style scoped>
.multi-range-slider-bar-only {
	display: flex;
	position: relative;
	border: none;
	border-radius: 0px;
	padding: 10px;
	box-shadow: none;
	flex-direction: column;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge,*/
}
</style>