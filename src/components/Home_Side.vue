<template>
  <div class="Side">
      <a-affix :offset-top="150" style="  position: absolute; right:10%;top:40%;">
        <a-anchor
          :target-offset="targetOffset"
          @click="custormAnchor"
          
        >
          <a-anchor-link
            href="#SelfCard"
            title="Introduce Myself"
            
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

<style >
.ant-anchor-link-title{
  color:#FFFFFF;
}

</style>