<template>
  <div class="home">
    
    
      <div class="container">
      <a-row class="row">
        <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 1.5 }">
          Col
        </a-col>
        <a-col :xs="{ span: 11, offset: 2 }" :lg="{ span: 7, offset: 1 }">
          Col
        </a-col>
        <a-col :xs="{ span: 6, offset: 1 }" :lg="{ span: 6.5, offset: 1.5 }">
          Col
        </a-col>
        </a-row>
        </div>
        
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
.home{
  height:90ch;
}
.home div {
   border: 1px solid red;
}
.row{
  height:fit-content;
}
.container{
  margin: 0 auto;
  max-width:60%; 
  min-width:50ch;
}

</style>
