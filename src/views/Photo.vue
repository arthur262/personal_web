<template>
  <div class="Photo">
    <a-layout>
      <!-- -->
      <a-layout-content class="head">
        <a-row type="flex">
          <a-col :flex="2">
            <div class="tabs">
              <!-- Active tab -->
              <div class="tabs__tab--active">
                <a-button
                  type="primary"
                  block
                  class="tabs__tab_active_background"
                  >All Labels</a-button
                >
              </div>
              <!-- Inactive tab -->
              <div class="tabs__tab--inactive">
                <a-button class="tabs__tab_inactive_background">
                  <h1 style="color: aliceblue">Landscape</h1>
                </a-button>
              </div>
              <div class="tabs__tab--inactive">
                <a-button class="tabs__tab_inactive_background">
                  <h1 style="color: aliceblue">Sky</h1>
                </a-button>
              </div>
              <div class="tabs__tab--inactive">
                <a-button class="tabs__tab_inactive_background">
                  <h1 style="color: aliceblue">Travel</h1>
                </a-button>
              </div>
            </div>
          </a-col>
          <a-col :flex="4"
            ><div style="float: right;width:70ch;height:5ch; margin-top:2ch;">
              <a-input-search
                v-model:value="value"
                placeholder="input search text"
                size="large"
                enter-button
                @search="onSearch"
                class="inputbox"
                style="width: 400px"
              />
            </div>
          </a-col>
          <a-col :flex="2"></a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
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
});
</script>

<style lang="less" scoped >
.head {
  position: relative;
  max-width: 100%;
  width: 160vh;
  min-width: 60vh;
  margin: 5ch auto 0;
  padding: 4ch;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4ch;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}
.head div {
  
}
.tabs {
  /* Center the content */
  align-items: center;
  display: flex;
}

.tabs__tab--active {
  border: 4px solid rgba(0, 0, 0, 0.3);
  /* Hide the bottom border */
  padding: 1.5ch;
  border-bottom-color: transparent;
  border-top-left-radius: 2ch;
  border-top-right-radius: 2ch;
}

.tabs__tab--inactive {
  padding: 1ch;
  border-bottom: 5px solid rgba(0, 0, 0, 0.3);
}
.tabs__tab_inactive_background {
  background-color: #909399;
  border-radius: 4ch;
  padding: 10px 1ch 6px;
  text-align: center;
  height: fit-content;
  align-items: center;
  margin: 0 2ch 0;
  width: fit-content;
  min-width: 15ch;
}
.tabs__tab_active_background {
  border-radius: 4ch;
  height: 6ch;
}
.inputbox{
  
}
</style>
