<template>
  <a-layout-header class="Content_Header">
    <div class="ID"></div>
    <div style="
        background: whitesmoke;
        width: 70%;
        min-width:50ch;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 4ch;
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
</template>

<script>
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";
export default {
  components: {},
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
.ID {
  height: 24ch;
  width: 24ch;
  background-image: url("https://web.cs.dal.ca/~yuanzhe/personal-web/image/Personal.jpg");
  background-size: 24ch;
  margin:auto 3ch auto ;
}
.Content_Header {
  background-color: unset;
  text-align: center;
  min-width: 100ch;
  width: 160ch;
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
