<template>
<div class="">
 
age:{{ timew }}
<button @click="increaseTimew">increaseTimew {{ doubleT }}</button>
<h1>{{ myTest }}</h1>
</div> 

</template>
<script>


export default{
  data(){
    return{
    timew:0,
    doubleT:''
  }
  },
  computed:{
    myTest(){
      return this.timew*2
    }
  }, watch:{timew(t){
    if(t>3){
      this.doubleT='Enougn'
      
    }else {
      this.doubleT='LINGIRIOSA'
    }
  }
  },
 
  methods:{
    increaseTimew(){
      this.timew++
    }
  },
}
</script>