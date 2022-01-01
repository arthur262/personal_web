<template>
  <div class="Photo">
    <a-layout>
      <!-- -->
      <a-layout-content class="head">
      
      </a-layout-content>
      <a-layout-content class="head">
        <h2>{{ statement }}</h2>
      </a-layout-content>
      <waterfall />
      <a-back-top />
    </a-layout>
  </div>
</template>

<script>
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_detail_EN.json";
import waterfall from "../../components/Photo/Photo_landscape_waterfall .vue";
//import switchs from "../../components/Photo/Photo_switch.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { waterfall},
  setup() {
    const value = ref("");
    const onSearch = (searchValue) => {
      console.log("use value", searchValue);
    };
    return {
      value,
      onSearch,
    };
  },
  data() {
    return {
      statement:
        "",
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
          this.statement = response.data.statement;
         
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>

<style lang="less" scoped>
.head {
  position: relative;
  max-width: 100%;
  width: 140vh;

  min-width: 60vh;
  margin: 5ch auto 0;
  padding: 2ch;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4ch;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}
</style>