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
        <a-col :flex="3"
          ><div class="switch">
            <p style="float: left; margin-right: 1ch">
              <b> Language Version : </b>
            </p>
            <a-switch
              style="margin-right: 2ch"
              checked-children="CN"
              un-checked-children="EN"
            />
            <a-button
              style="margin-left: 2ch; border-radius: 2ch"
              type="primary"
              >DownLoad</a-button
            >
            <br /></div
        ></a-col>
        <a-col :flex="2"></a-col>
      </a-row>
      
      <!-- content-->
      <a-layout-content class="Content">
          <Main />
          <Educationcontent />
          <Skills />
          <Project/>
        <CVSide />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import axios from "axios";
import Educationcontent from "../components/CV_Edu_Back.vue";
import Main from "../components/CV_Main.vue";
import Skills from "../components/CV_Skill.vue";
import CVSide from "../components/CV_Side.vue";
import Project from "../components/CV_Project.vue"
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";
export default {
  components: { Main, Skills, CVSide, Educationcontent,Project },
  setup() {},

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
  },
};
</script>

<style lang="less" scoped>
.Header {
  background-color: unset;
  line-height: 1ch;
}

.Content {
  display: relative;
  max-width: fit-content;
  width: 150ch;
  min-height: 150ch;
  max-height: fit-content;
  margin: 5ch auto 3ch;
}
.switch {
  float: right;
  width: fit-content;
}
.Content_Header h3 {
  line-height: 1.2em;
}
</style>
