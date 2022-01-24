<template>
  <a-layout-header class="Content_Header">
    <div class="ID"></div>
    <div  style="
        background: whitesmoke;
        width: fit-content;
        min-width:30ch;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 1.5ch;
        padding: 4ch 10ch 4ch;
        border: 2px solid var(--grey1);
      "
    >
      <h1 style="font-size: 1.5em"><b>{{name}}</b></h1>
      <h3 class="w3">{{Phone}} {{ phone_CN }} | {{ phone_CA }}</h3>
      <h3 class="w3">
       {{Email_L}} :<a
          href="mailto:arthur262@outlook.com"
          title="Send me the Email"
          style="color:black"
          >{{ email }}</a
        >
      </h3>
      <h3 class="w3">
        {{GitHub_L}}:
        <a href="https://github.com/arthur262" title="Github link">{{
          github
        }}</a>
      </h3>
      <h3 class="w3">{{Current_L}}: {{ Currentyear }}</h3>
    </div>
    
  </a-layout-header>
</template>

<script>

import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";
export default {
  components: {},
  setup() {
   
  },

  data() {
    return {
      name:"",
      phone_CN: "",
      phone_CA: "",
      Phone:"",
      email: "",
      github: "",
      Currentyear: "",
      Email_L:"",
      GitHub_L:"",
      Current_L:"",
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
          this.Phone=response.data.Phone;
          this.email = response.data.email;
          this.github = response.data.github;
          this.Currentyear = response.data.Currentyear;
          this.Email_L = response.data.Email_L;
          this.Current_L = response.data.Current_L;
          this.GitHub_L = response.data.GitHub_L;
          this.name = response.data.name;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
   
  },
};
</script>

<style lang="less" scoped>
.ID {
  height: 24ch;
  width: 24ch;
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/Personal.jpg");
  background-size: 24ch;
  margin:auto 3ch auto ;
}
.Content_Header {
  background-color: unset;
  text-align: center;
  width: fit-content;
  border-radius: 1.5ch;
  line-height: 4ch;
  height: fit-content;
  display: flex;
  margin: 0 auto;
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
