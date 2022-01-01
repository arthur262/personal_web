<template>
  <div>
    <div class="waterfall px-container clearfix" v-cloak>
        <a-image-preview-group>
      <div
        class="px-waterfall left"
        v-for="(el, i) in newWaterfallData"
        :key="i"
      >
        <a-card
          hoverable
          style="width: "
          v-for="(item, index) in el"
          :key="index"
          class="card_div"
        >
          <template  #cover>
            <a-image :src="item.u_img" alt="example" loading="lazy"/>
            
          </template>
        </a-card>
      </div>
      </a-image-preview-group>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_Src.json";
export default {
  data() {
    return {
      waterfallData:"",
      newWaterfallData: "",
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
          this.waterfallData = response.data.Traveller;
          this.fresh();
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fresh(){
      let [...waterfallData] = this.waterfallData;
    let [...newWaterfallData] = [[], [], []];
    waterfallData.forEach((el, i) => {
      switch (i % 3) {
        case 0:
          newWaterfallData[0].push(el);
          break;
        case 1:
          newWaterfallData[1].push(el);
          break;
        case 2:
          newWaterfallData[2].push(el);
          break;
      }
    });
    this.newWaterfallData = newWaterfallData;
    }
  },
  created() {
    
  },
  
};
</script>
<style lang="less" scoped>
.px-container {
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
}
.card_div{
    margin:2ch auto 2ch;
    border-radius:2ch;
    padding:2ch;
}
.left {
  float: left;
  width: fit-content;
}
[v-cloak] {
  display: none !important;
}
.waterfall {
  margin-top: 2ch;
  margin-bottom: 2ch;
}
.px-waterfall {
  width: calc(300px);
  &:nth-child(3n + 2) {
    margin: 1ch 4ch 10ch;
  }
  img.bg-img {
    border-radius: 8px;
  }
}



</style>
