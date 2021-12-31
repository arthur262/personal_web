<template>
  <div class="home" >
    <Intro/>
    <SelfCard/>
    <Side/>
    <Scrolls/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Scrolls from "../components/Home/Home_Scroll.vue"
import SelfCard from "../components/Home/Home_Self_Card.vue";
import Side from "../components/Home/Home_Side.vue"
import Intro from "../components/Home/Home_Intro.vue"

export default {
  data() {
    return {
    };
  },
  components: {
    SelfCard,
    Side,
    Intro,
    Scrolls
  },
  mounted: function () {
    
  },
  methods: {
  },
};

</script>
<style lang="less" scoped>
.home{
  min-height:120ch;
  max-height: fit-content;
  width: inherit;
}
.row{
  height:fit-content;
}

</style>
