<template>
  <div class="home" >
    <Intro/>
    <SelfCard/>
    <Side/>
    <Scrolls/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Scrolls from "../components/Home_Scroll.vue"
import SelfCard from "../components/Home_Self_Card.vue";
import Side from "../components/Home_Side.vue"
import Intro from "../components/Home_Intro.vue"
const basicURL ="http://arthur1.oss-us-west-1.aliyuncs.com/CV_EN.json"

export default {
  data() {
    return {
    };
  },
  components: {
    SelfCard,
    Side,
    Intro,
    Scrolls
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
        .then(() => {
          
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

</script>
<style scoped>
.home{
  min-height:120ch;
  max-height: fit-content;
  width: inherit;
}
.row{
  height:fit-content;
}

</style>
