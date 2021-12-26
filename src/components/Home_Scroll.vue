<template>
  <div class="scroll">
      <div v-for=" item in list" :key="item.id">
          <div class="image" v-bind:src="item.image">
          </div>
          <div class="title"><h1>{{item.Title}}<h1/></div>
          <div v-for=" items in item.children" :key="items.id"
          style="width:inherit;height:10ch;">
              {{items.details}}
          </div>
      </div>

  </div>
</template>

<script>
import axios from "axios";
const basicURL = "http://arthur1.oss-us-west-1.aliyuncs.com/Home_Scroll.json";
export default {
    components: {},
  setup() {
  },

  data() {
    return {
      list:"",
      
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

<style scoped>
.scroll {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    perspective:3px;
}
.scroll div {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size : 30px;
    letter-spacing: 1ch;
}
.image{
    transform: translateZ(-1px) scale(1.6);
    background-size: cover;
    height: 100vh;
    z-index: -1;
}
.title {
    z-index: -1;
    transform: translateZ(1px) translateY(-30vh);
    font-size:30px;
    color: snow;
}
</style>