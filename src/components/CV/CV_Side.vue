<template>
  <a-affix :offset-top="300" style=" margin-left:20%; width:fit;">
        <a-anchor
          :target-offset="targetOffset"
          @click="custormAnchor"
          
        >
          <a-anchor-link
            
            title="Education"
          />
          <a-anchor-link
            
            title="Ability"
          />
          <a-anchor-link  title="Project">
          </a-anchor-link>
        </a-anchor>
        </a-affix>
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
     this.targetOffset = window.innerHeight / 1.5;
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

</style>