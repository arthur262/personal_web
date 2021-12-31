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
            <template #cover>
              
              <a-image :src="item.u_img" alt="example" loading="lazy" />
            
            </template>
          </a-card>
        
        </div>
      </a-image-preview-group>
      
    </div>
    <div class="switchbar" >
      <a-pagination v-model:current="current" :total="50" />
      </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref  } from "vue";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_Src.json";
export default {
  setup() {
    return{
      current:ref(1), 
    }
  },
  data() {
    return {
      waterfallData:"",
      newWaterfallData: "",
    };
  },
  mounted: function () {
    this.getdata();
  },
  created() {
    
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
          this.waterfallData=response.data.Traveller.concat(response.data.Landscape.concat(response.data.Sky));
            this.fresh();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fresh(){
      let [...waterfallData] = this.waterfallData;
    let [...newWaterfallData] = [[], [], []];
    let container=[true,true,true];
    waterfallData.forEach((el, i) => {
      var bool=this.isHorzeontal(el);
      
      //如果第一行不能进入
      if(container[i%3]==true){
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
        bool ? container[i%3]=true : container[i%3]=false;
      }
      else{
        //放入list
        i++;
      }
      //完成第一行之后判断第二行
      if(container[i%3]!=true){
        i++;
      }
      else{
        //放入list
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
        bool ? container[i%3]=true : container[i%3]=false;
      }
      //完成第二行之后判断第三行
      if(container[i%3]!=true){
        i++;
      }else{
        //放入list
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
        bool ? container[i%3]=true : container[i%3]=false;
      }

      //如果三个list目前都是竖图,直接放入第一行
       switch ((i-2) % 3) {
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
        bool ? container[(i-2)%3]=true : container[(i-2)%3]=false;
      
    });
    this.newWaterfallData = newWaterfallData;
    },
    isHorzeontal(element){
      var img=new Image();
      img.src =element.u_img;
      img.onload=function(){
      return img.width>img.height? true:false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.px-container {
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
}
.card_div {
  margin: 2ch auto 2ch;
  border-radius: 1.5ch;
  padding: 2ch;
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
.switchbar {
  margin: 0 auto;
  width:fit-content;
}
</style>
