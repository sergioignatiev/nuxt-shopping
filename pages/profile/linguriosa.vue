<template>
<div class="">
 
age:{{ timew }}
<button @click="increaseTimew">increaseTimew {{ doubleT }}</button>
</div> 
<h1>{{ myTest }}</h1>
</template>
<script>


export default{
  data(){
    return{
    timew:0,
    doubleT:''
  }
  },
  methods:{
    increaseTimew(){
      this.timew++
    }
  },
  watch:{timew(t){
    if(t>3){
      this.doubleT='Enougn'
      
    }else{
      this.doubleT=''
    }
  }
  },
  computed:{
    myTest(){
      return this.timew+29
    }
  }
}
</script>