<template>
  
        <a-row type="flex">
          <a-col :flex="2">
            <div class="tabs">
              <!-- Active tab -->
              <div class="tabs__tab--active">
                <a-button
                  type="primary"
                  block
                  class="tabs__tab_active_background"
                  >
                  <router-link to="/Photo">
                  {{ AllLabels }}
                  </router-link>
                  </a-button
                >
              </div>
              <!-- Inactive tab -->
              <div class="tabs__tab--inactive">
                <a-button class="tabs__tab_inactive_background">
                  <h1 style="color: aliceblue">
                    <router-link to="/Photo/Landscape">
                    {{ Landscape }}
                    </router-link>
                    </h1>
                </a-button>
              </div>
              <div class="tabs__tab--inactive">
                <a-button class="tabs__tab_inactive_background">
                  <h1 style="color: aliceblue">
                    <router-link to="/Photo/Sky">
                    {{ Sky }}
                    </router-link>
                    </h1>
                </a-button>
              </div>
              <div class="tabs__tab--inactive">
                <a-button class="tabs__tab_inactive_background">
                  <h1 style="color: aliceblue">
                    <router-link to="/Photo/Travel">
                    {{ Travel }}
                    </router-link>
                    </h1>
                </a-button>
              </div>
            </div>
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
      AllLabels: "",
      Landscape: "",
      Sky: "",
      Travel: "",
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

.tabs {
  /* Center the content */
  align-items: center;
  display: flex;
}

.tabs__tab--active {
  padding: 1ch;
  border-top-left-radius: 1.5ch;
  border-top-right-radius: 1.5ch;
}

.tabs__tab--inactive {
  padding: 1ch;
}
.tabs__tab_inactive_background {
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 1.5ch;
  padding: 5px 1ch 3px;
  text-align: center;
  height: fit-content;
  align-items: center;
  width: fit-content;
  min-width: 15ch;
}
.tabs__tab_active_background {
  border-radius: 1.5ch;
  height: 6ch;
}
</style>