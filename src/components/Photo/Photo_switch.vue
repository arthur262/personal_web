<template>
  
        <a-row type="flex">
          <a-col :flex="2">
            <a-menu v-model:selectedKeys="current" mode="horizontal">
              <a-menu-item key="all">
                <router-link to="/Photo">
                {{AllLabels}}
                </router-link>
              </a-menu-item>
              <a-menu-item key="Sky">
                <router-link to="/Photo/Sky">
                {{Sky}}
                </router-link>
              </a-menu-item>
              <a-menu-item key="Landscape">
                <router-link to="/Photo/Landscape">
                {{Landscape}}
                </router-link>
              </a-menu-item>
              <a-menu-item key="Travel">
                <router-link to="/Photo/Travel">
                {{Travel}}
                </router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
          <a-col :flex="4"> </a-col>
          <a-col :flex="2">
            <div
              style="
                float: right;
                height: 5ch;
                margin-top: 2ch;
                margin-right: 3ch;
              "
            >
              <a-input-search
              disabled
                v-model:value="value"
                placeholder="input search text"
                size="large"
                enter-button
                @search="onSearch"
                style="border-radius:1.5ch"
              />
            </div>
          </a-col>
        </a-row>
      
</template>

<script>
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_detail_EN.json";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {  },
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
      current : ref(['all']),
      AllLabels: "",
      Landscape: "",
      Sky: "",
      Travel: "",
      statement:"",
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
          this.AllLabels = response.data.AllLabels;
          this.Landscape = response.data.Landscape;
          this.Travel = response.data.Travel;
          this.statement = response.data.statement;
          this.Sky = response.data.Sky;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>

<style lang="less" scoped>

</style>