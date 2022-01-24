<template>
  <div class="CV">
    <a-layout>
      <a-layout-header class="Header">
        <a-page-header
          style="border: 0px solid rgb(235, 237, 240)"
          title="CV"
          sub-title="This is my personal CV"
          @back="() => $router.go(-1)"
        />
      </a-layout-header>
      <!-- Switch box -->
      <a-row type="flex">
        <a-col :flex="2"></a-col>
        <a-col :flex="4"
          >
            <a-button type="primary" @click="down()" class="switch" >
              <cloud-download-outlined />
              Download
            </a-button>
            </a-col>
        <a-col :flex="2"></a-col>
      </a-row>

      <!-- content-->
      <div style="display:flex;wdith:fit-content;margin:0 auto;">
      <a-layout-content class="Content">
        <!--div 数字是用于动画的 -->
        <div id="div1" >
        <Main />
        </div>
        <div id="div2">
        <Educationcontent />
        </div>
        <div id="div3">
        <Skills />
        </div>
       <div id="div4">
        <Project />
        </div>
      
       
      </a-layout-content>
      <div style="width:15ch;">
        <CVSide />
        </div>
      </div>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from "axios";
import Educationcontent from "../components/CV/CV_Edu_Back.vue";
import Main from "../components/CV/CV_Main.vue";
import Skills from "../components/CV/CV_Skill.vue";
import CVSide from "../components/CV/CV_Side.vue";
import Project from "../components/CV/CV_Project.vue";
import { CloudDownloadOutlined  } from '@ant-design/icons-vue';
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";

const fileURL = "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/Resume-En.docx";
export default defineComponent({
  components: { Main, Skills, CVSide, Educationcontent, Project,CloudDownloadOutlined },
  setup() {
  },

  data() {
    return {
      phone_CN: "",
      phone_CA: "",
      email: "",
      github: "",
      Currentyear: "",
    };
  },
  mounted: function () {
    this.getdata();
    this.load();
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
          this.phone_CN = response.data.phone_CN;
          this.phone_CA = response.data.phone_CA;
          this.email = response.data.email;
          this.github = response.data.github;
          this.Currentyear = response.data.Currentyear;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    down() {
    let link = document.createElement("a"); 
    link.style.display = "none"; 
    link.href = fileURL; 
    link.setAttribute("download", "CV_EN"); 
    document.body.appendChild(link); 
    link.click(); 
  },
   load() {
    document.getElementById("div1").className = "fade-in-section";
    document.getElementById("div1").style.animationDelay="0s";
    document.getElementById("div2").className = "fade-in-section";
    document.getElementById("div2").style.animationDelay="0.2s";
    document.getElementById("div3").className = "fade-in-section";
    document.getElementById("div3").style.animationDelay="0.4s";
    document.getElementById("div4").className = "fade-in-section";
    document.getElementById("div4").style.animationDelay="0.6s";

},
  }
});
</script>

<style lang="less" scoped>
.Header {
  background-color: unset;
  line-height: 1ch;
}

.Content {
  display: relative;
  max-width: 100ch;
  min-width: 70ch;
  min-height: 150ch;
  max-height: fit-content;
}
.switch {
  float: right;
  width: fit-content;
  border-radius: 1.5ch;
}
.Content_Header h3 {
  line-height: 1.2em;
}
</style>
