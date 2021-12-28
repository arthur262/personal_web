<template>
  <a-affix :offset-top="200" style="position: absolute; right:5%;top:40%;">
        <a-anchor
          :target-offset="targetOffset"
          @click="custormAnchor"
          
        >
          <a-anchor-link
            href="Education"
            title="Education"
          />
          <a-anchor-link
            href="Ability"
            title="Ability"
          />
          <a-anchor-link href="Project" title="Project">
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