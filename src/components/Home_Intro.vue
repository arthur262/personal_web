<template>
  <div class="container" id="intro">
        <div class="title"> <h1>Rolling Rock<br/>  Arthur </h1>
        <a-button class="btn" :ghost="true" href="#CV">
          <b> My CV</b>
           <br/>
          <h2 style="margin:0;padding:0;color:#f5f5f5;"><b>+</b></h2>
          </a-button>
        </div>
        
        
  </div>
</template>

<script>
export default {
  

}
</script>

<style  scoped>
:root{
  --percentage:0%;
}
.container {
    margin:0 0 0;
    padding:0;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:100vh;
    background-image:url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/DSC00528-5.jpg");
    background-size: cover;
    
    
}
.title{
  margin: 0 auto;
  width: 80%;
  height:80vh;
}
.title h1{
    color:#f5f5f5;
    font-size:8vh;
    width: 80%;
    height:60vh;
    margin: 0 auto;
    padding-top:20vh;
    text-align:center;
    font-family: Helvetica;
    letter-spacing:0.2em;
    background-image: linear-gradient(75deg, white 0%,white 33.3%,rgba(255,255, 255,0)66.67%,rgba(255,255, 255,0) 100%);
    background-size:300% 100% ;
    background-clip: text;
    -webkit-background-clip: text;
    color :transparent;
    background-position-x: 100%;
    transition: 2s background-position-x ease-in-out;
    
    
}
.title h1:hover{
  background-position-x: 0%;
}
.btn{
  
  margin-left: 42.5% ;
  margin-right: 42.5% ;
  width: 15%;
  height: 7ch;
  border-radius:10ch;
  font-size: 1.2em;
}
.btn:hover{
  font-size: 1.5em;
  padding:2ch;
}



</style>