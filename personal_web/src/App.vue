<template>
  <div id="nav">
    <a-layout class="layout">
      <a-layout-header>
        <div class="logo" style="background:url('./assets/logo.png');width:64px;height:64px;float:left;"/>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1"><router-link to="/Home">Home</router-link></a-menu-item>
          <a-menu-item key="2">
            <router-link to="/CV">CV</router-link>
          </a-menu-item>
          <a-menu-item key="3"><router-link to="/Photo">Photo</router-link></a-menu-item>
        </a-menu>
      </a-layout-header>
      <router-view/>

      <a-layout-footer style="text-align: center">
        Ant Design ©2021 Created by YuanZhe Zhang
      </a-layout-footer>
    </a-layout>
  </div>

</template>

<script>

import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },

});

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   --green1:#b5c4b1;
    --green3:#7b8b6f;
    --white1:#fdf9ee;
    --white2:#fffaf4;
    --grey1:#e0e5df;
    --grey2:#ececea;
    --grey3:#f0ebe5;
  color: black;
}
.site-layout-content {
  min-height: 280px;
  width:auto;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  min-width: 5ch;
  height: 3ch;
  margin: 16px 24px 16px 0;
  
}

[data-theme='dark'] .site-layout-content {
  background: black;
}

</style>
