<template>
  <div class="Side">
      <a-affix :offset-top="150" style="  position: absolute; right:10%;top:40%;">
        <a-anchor
          :target-offset="targetOffset"
          @click="custormAnchor"
          
        >
          <a-anchor-link
          class="test2"
            href="intro"
            title="Introduction"
        ></a-anchor-link>
         <a-anchor-link
          class="test2"
            href="SelfCard"
            title="Self Card"
        ></a-anchor-link>
         <a-anchor-link
          class="test2"
            href="scroll"
            title="Life Map"
        ></a-anchor-link>
         
        </a-anchor>
        </a-affix>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({ checked1: false });

    return {
      targetOffset: undefined,
      showInkInFixed: true,
      ...toRefs(state),
    };
  },
   mounted: function () {
     this.targetOffset = window.innerHeight / 1;
   },
    methods:{
     custormAnchor(e,link) { 
     e.preventDefault();
     var scrolls=document.getElementById(link.href);
     scrolls.scrollIntoView({block:'start',behavior:'smooth'});     
                 
},
    }

})
</script>

<style>
.test2>*{
  color: white !important;
}

</style>