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
      <a-row class="container">
        <a-col
          :xs="{ span: 5, offset: 1 }"
          :lg="{ span: 3, offset: 2 }"
        ></a-col>
        <a-col
          :xs="{ span: 11, offset: 1 }"
          :lg="{ span: 3, offset: 2 }"
        ></a-col>
        <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
          <div class="switch">
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
            <br />
          </div>
        </a-col>
      </a-row>
      <div style="overflow: auto"></div>

      <a-layout-content class="Content">
        <div>
          <a-layout-header
            class="Content_Header"
            style="
              background-color: unset;
              text-align: center;
              min-width: 120ch;
              line-height: 4ch;
              padding-top: 5ch;
              height: fit-content;
              display: flex;
            "
          >
            <div class="ID"></div>
            <div
              style="
                background-color: var(--grey1);
                width: 70%;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                padding: 5ch;
                border: 2px solid var(--grey1);
              "
            >
              <h1 style="font-size: 1.5em"><b>YuanZhe Zhang(Arthur)</b></h1>
              <h3>Phone: {{ phone_CN }} | {{ phone_CA }}</h3>
              <h3>
                Email:<a
                  href="mailto:arthur262@outlook.com"
                  title="Send me the Email"
                  >{{ email }}</a
                >
              </h3>
              <h3>
                GitHub:
                <a href="https://github.com/arthur262" title="Github link">{{
                  github
                }}</a>
              </h3>
              <h3>Current: {{ Currentyear }}</h3>
            </div>
          </a-layout-header>
          <a-layout-content class="education">
            <div>
              <h1 class="Label">Education BackGround</h1>
              <h3 style="font-size: 1.3em">
                <b>{{ Bacher }}</b>
              </h3>
              <div style="height: 4ch; font-size: 1em">
                <h3 style="float: left">{{ School }}</h3>
                <h3 style="float: right">{{ School_Date }}</h3>
              </div>
              <ul>
                <li>{{ CGPA }}</li>
                <li>{{ Education_content }}</li>
              </ul>
            </div>
            <div></div>
          </a-layout-content>
         <Skills/>
        </div>
        <CVSide/>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import axios from "axios";
import Skills from "../components/CV_Skill.vue";
import CVSide from "../components/CV_Side.vue"
const basicURL = "https://jsonplaceholder.typicode.com/todos/1";
export default ({
  components: {Skills,CVSide},
  setup() {
  },

  data() {
    return {
      phone_CN: "",
      phone_CA: "",
      email: "",
      github: "",
      Currentyear: "",
      Bacher: "",
      School: "",
      School_Date: "",
      CGPA: "",
      Education_content: "",
      
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
          this.phone_CN = response.data.title;
          this.phone_CA = response.data.title;
          this.email = response.data.title;
          this.github = response.data.title;
          this.Currentyear = response.data.title;
          this.Bacher = response.data.title;
          this.School = response.data.title;
          this.School_Date = response.data.title;
          this.CGPA = response.data.title;
          this.Education_content = response.data.title;
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
.Header {
  background-color: unset;
  line-height: 1ch;
}
.ID {
  height: 20ch;
  width: 20ch;
  margin-left: 2ch;
  background-image: url("https://web.cs.dal.ca/~yuanzhe/personal-web/image/Personal.jpg");
  background-size: 20ch;
  margin: 3ch auto 0;
}
.education {
  margin: 0 auto;
  width: 80%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  margin-top: 4ch;
  border-radius: 1.5ch;
  background: whitesmoke;
}
.Content {
  display: flex;
  max-width: 200ch;
  min-width: 130ch;
  height: 200ch;
  margin: 5ch auto 3ch;
}
.switch {
  float: right;
  width: fit-content;
}
.Content_Header h3 {
  line-height: 1.2em;
}
.Label {
  font-family: "华文行楷";
  font-size: 2.2em;
}
.Content_Header h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
</style>
