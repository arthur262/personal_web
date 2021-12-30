<template>
  <div class="box" id="Project">
    <div style="display:flex" >
    <!--<bars-outlined/>-->
    <h2>{{ Projects }}</h2>
    </div>
    
      <div v-for="iteam in Project" :key="iteam.id" class="card">
        <a-card hoverable class="container" @mouseenter="move" >
         <div style="margin:0 auto; width:fit-content; margin-bottom:2ch;">
            <img v-bind:src="iteam.pciture"  height="200" width="200" size="10ch">
         </div>
          <a-card-meta style="padding: 1ch">
            <template #description>
              <h2>{{ iteam.Title }}</h2>
              <p>
                <b>{{ iteam.TimeRanges }}</b>
              </p>
            <h4>  Github : </h4>
               <a v-bind:href="iteam.github "> {{ iteam.github }}</a>
              <div v-show="describe_OP">
                <ol
                  class="C_content"
                  v-for="iteamson in iteam.children"
                  :key="iteamson.id"
                >
                  <li>{{ iteamson.details }}</li>
                </ol>
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    
    </div>
</template>

<script>

import axios from "axios";
const basicURL = "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";

export default ({
  setup() {},
  data() {
    return {
      describe_OP:false,
      Projects: "",
      Project: [],
    };
  },
   mounted : function(){
          this.getdata();
      },
  methods: {
    move(){
      this.describe_OP =true;
    },
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
          this.Projects = response.data.Projects;
          
          this.Project = response.data.Project;
  
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components:{
      //barsoutlined,
  },
});
</script>

<style lang="less" scoped>
.box{
    width: 120ch;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  border-radius: 1.5ch;
  margin: 3ch auto 3ch;
  background: whitesmoke;
}
.card {
    display:flex;
  margin: 2ch auto ;
  width: inherit;
  max-width: 80%;
}
.C_content {
  width: fit-content;
}

</style>