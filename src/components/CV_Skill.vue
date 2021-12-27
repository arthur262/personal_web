<template>
  <div style="width: fit-content; height: fit-content">
      <!--  Ability Box    -->
    <div class="abilitybox" id="Ability"> 
      <h3>{{ LanguageSkills }}</h3>
      <a-descriptions bordered>
        <a-descriptions-item label="Basic Languages" style="font-size:1.7em;">
          <p
            style="line-height: 0.5em;font-size:0.7em;"
            v-for="iteam in this.Language"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="Operation Systeam" style="font-size:1.7em;">
          <p
            style="line-height: 0.5em;font-size:0.7em;"
            v-for="iteam in Operation"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
      </a-descriptions>
      <br />
      <a-descriptions bordered>
        <a-descriptions-item label="UI" style="font-size:2em;">
          <p style="line-height: 0.5em; font-size:0.7em;" v-for="iteam in UI" :key="iteam.id">
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="DataBase">
          <p
            style="line-height: 0.5em"
            v-for="iteam in DataBase"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <a-descriptions-item label="Framework" style="font-size:2em;">
          <p
            style="line-height: 0.5em; font-size:0.7em;"
            v-for="iteam in Framework"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <br />
      </a-descriptions>
    </div>
    <div v-if="false" class="detail">
      <ul v-for="iteam in Techlist" :key="iteam.id">
        <h3>{{ iteam.title }}</h3>
        <ul>
          <li v-for="iteamson in iteam.children" :key="iteamson.id">
            {{ iteamson.description }}
          </li>
        </ul>
      </ul>
    </div>
    <!--  Project Box    -->
    <div class="box" style="margin-left:2ch" id="Project">
    <div style="display:flex" >
    <!--<bars-outlined/>-->
    <h2>{{ Projects }}</h2>
    </div>
    <div style="display: flex; height: fit-content">
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
      LanguageSkills: "",
      Language: [],
      DataBase: [],
      Framework: [],
      UI: [],
      Operation:[],
      Techlist: [],
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
          this.LanguageSkills = response.data.LanguageSkills;
          this.Language = response.data.Language;
          this.Framework = response.data.Framework;
          this.DataBase = response.data.DataBase;
          this.UI = response.data.UI;
          this.Operation = response.data.Operation;
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

<style scoped>
.container {
  max-width: 100ch;
  min-width: 40ch;
  display: flex;
}
.card {
  margin: 2ch;
  width: inherit;
}
.C_content {
  width: fit-content;
}
.box{
    width: inherit;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  margin-top: 4ch;
  border-radius: 1.5ch;
  margin: 3ch auto 3ch;
  background: whitesmoke;
}
.abilitybox{
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  min-width:fit-content;
  max-width: 120ch;
  margin: 4ch auto 4ch;
  background: whitesmoke;
}
.detail{
  min-width:0px;
  max-width: fit-content;
}
</style>
