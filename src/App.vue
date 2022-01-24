<template>
  <div id="nav">
    <a-layout class="layout">
      <a-layout-header style="color: var(--white1)">
        <div
          class="logo"
          
        />
        <a-menu
          :default-selected-keys="selectedKeys"
          theme="dark"
          mode="horizontal"
          style="lineheight: 64px; width: auto"
        >
          <a-menu-item key="1" @click="open('1')">
            <router-link to="/Home"> <home-outlined />Home </router-link>
          </a-menu-item>
          <a-menu-item key="2" @click="open('2')">
            <router-link to="/CV"> <edit-outlined />CV </router-link>
          </a-menu-item>
          <a-menu-item key="3" @click="open('3')">
            <router-link to="/Photo">
              <file-image-filled />
              Photo Product
            </router-link>
          </a-menu-item>

          <a-menu-item v-if="false"
            key="4"
            @click="open('4')"
            style="margin-left: auto; margin-right: 2ch"
          >
            <router-link to="/Contact">
             <contacts-outlined />
             Contact Me </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <router-view />

      <a-layout-footer style="text-align: center">
        Ant Design ©2021 Created by YuanZhe Zhang
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import "./css/word.css";
import "./css/fade_animation.css";

import { defineComponent } from "vue";
import {
  EditOutlined,
  FileImageFilled,
  HomeOutlined,
  ContactsOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  setup() {},
  data() {
    return {
      selectedKeys: ["1"],
    };
  },

  components: {
    EditOutlined,
    HomeOutlined,
    FileImageFilled,
    ContactsOutlined,
  },
  methods: {
    open(indexs) {
      this.selectedKeys[0] = indexs;
      console.log(this.selectedKeys);
    },
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --green1: #b5c4b1;
  --green3: #7b8b6f;
  --white1: #fdf9ee;
  --white2: #fffaf4;
  --grey1: #e0e5df;
  --grey2: #ececea;
  --grey3: #f0ebe5;
  color: black;
}
.logo{
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/mmexport1640288180459.png");
  width: 56px; 
  height: 56px; 
  background-size:cover ;
  margin: 0.5ch 2ch 0  auto;
  border-radius:3ch;
  float: left;
}
.site-layout-content {
  min-height: 280px;
  width: max-content;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  min-width: 5ch;
  height: 3ch;
  margin: 16px 24px 16px 0;
}
#nav {
  min-width: 10ch;
  height: fit-content;
}

[data-theme="dark"] .site-layout-content {
  background: black;
}
</style>
