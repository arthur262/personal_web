<template>
  <div class="scroll"  id="scroll" v-for=" item in list" :key="item.id">
    
        <section class="img" v-bind:style="{ 'background-image': 'url(' + item.image + ')','background-repeat':'no-repeat','background-size':'100% 100%' }">  
          {{item.Title}}
          </section>
        <div class="describe"  v-for=" items in item.children" :key="items.id">{{items.details}}</div>
  </div>
</template>

<script>
import axios from "axios";
const basicURL = "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/Home/Home_Scroll_EN.json";
export default {
    components: {},
  setup() {
  },

  data() {
    return {
      "list":""
      
    };
  },
  mounted: function () {
    this.getdata();
    
    
  },
  methods: {
    getdata() {
      axios
        .get(
          basicURL,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          },
          {
            emulateJSON: true,
            crossOriginIsolated: true,
          }
        )
        .then((response) => {
            this.list = response.data.list;
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    
  },

}
</script>

<style lang="less" scoped>
.scroll {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
}
::-webkit-scrollbar{
    display: none;
}
section{
    height: 100vh;
    background-color: #c4cbcf;
    color: #fff;
    font-size: 15vh;
    display: flex;
    justify-content: center;
    width:100%;
    align-items: center;
}
.describe{
    height: fit-content;
    background-color: #c4cbcf;
    color: #fff;
    font-size: 4em;
    display: flex;
    padding:1ch;
    justify-content: center;
    align-items: center;
    
}
.img{
    background-size: auto;
    background-position: center;
    overflow: hidden;
    background-attachment: fixed;
    background-repeat: no-repeat;
    max-width: 100%;
    user-select: none;
    cursor: default;
    
}
</style>



    





 
 