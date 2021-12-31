<template>
  <div id="nav">
    <a-layout class="layout">
      <a-layout-header style="color: var(--white1)">
        <div class="logo" style="background:url('./assets/logo.png');width:64px;height:64px;float:left;"/>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1" >
            <router-link to="/Home">
              <home-outlined />Home
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/CV">
              <edit-outlined />CV
            </router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/Photo">
              <edit-outlined />Photo
            </router-link>
            
          </a-menu-item>
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
        import { EditOutlined } from '@ant-design/icons-vue';
        import { HomeOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },
  components: {
    EditOutlined,
    HomeOutlined,
  }

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
  width:max-content;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  min-width: 5ch;
  height: 3ch;
  margin: 16px 24px 16px 0;
  
}
#nav{
  min-width: 1226px;
  height: fit-content;
}

[data-theme='dark'] .site-layout-content {
  background: black;
}
</style>
