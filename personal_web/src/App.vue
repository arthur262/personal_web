<template>
  <div id="nav">
    <a-layout class="layout">
      <a-layout-header>
        <image class="logo" />
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

  color: #2c3e50;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

</style>
