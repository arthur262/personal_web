<template>
  <div style="width: fit-content; height: fit-content">
      <!--  Ability Box    -->
    <div class="box"> 
      <h3>{{ LanguageSkills }}</h3>
      <a-descriptions bordered>
        <a-descriptions-item label="Basic Labguages">
          <p
            style="line-height: 0.5em"
            v-for="iteam in Language"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="Operation Systeam">
          <p
            style="line-height: 0.5em"
            v-for="iteam in Operation"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
      </a-descriptions>
      <br />
      <a-descriptions bordered>
        <a-descriptions-item label="UI">
          <p style="line-height: 0.5em" v-for="iteam in UI" :key="iteam.id">
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

        <a-descriptions-item label="Framework">
          <p
            style="line-height: 0.5em"
            v-for="iteam in Framework"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <br />
      </a-descriptions>
    </div>
    <div v-if="false">
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
    <div class="box" style="margin-left:2ch">
    <div style="display:flex" >
    <!--<bars-outlined/>-->
    <h2>{{ Projects }}</h2>
    </div>
    <div style="display: flex">
      <div v-for="iteam in Project" :key="iteam.id" class="card">
        <a-card hoverable class="container">
          <template #cover>
            <img src="" />
          </template>
          <a-card-meta style="padding: 1ch">
            <template #description>
              <h4>{{ iteam.Title }}</h4>
              <p>
                <b>{{ iteam.TimeRanges }}</b>
              </p>
              <p>{{ iteam.github }}</p>
              <div v-show="false">
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
//import { defineComponent } from 'vue';
//import {barsoutlined} from '@ant-design/icons-vue';
import axios from "axios";
const basicURL = "https://jsonplaceholder.typicode.com/todos/1";
export default ({
  setup() {},
  data() {
    return {
      drscribe:"",
      Projects: "",
      LanguageSkills: "",
      Language: "",
      DataBase: "",
      Framework: "",
      UI: "",
      Operation: "",
      Techlist: "",
      Project: "",
    };
  },
   mounted : function(){
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
          this.drscribe = response.data.title;
          this.Projects = response.data.title;
          this.LanguageSkills = response.data.title;
          this.Language = response.data.title;
          this.DataBase = response.data.title;
          this.UI = response.data.title;
          this.Operation = response.data.title;
          this.Project = response.data.title;
  
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
    width: fit-content;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  margin-top: 4ch;
  border-radius: 1.5ch;
  margin: 3ch auto 3ch;
  background: whitesmoke;
}
</style>
