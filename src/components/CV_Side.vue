<template>
  <a-affix :offset-top="200" style="margin-top: 20%;margin-left:2ch;">
        <a-anchor
          :target-offset="targetOffset"
          
        >
          <a-anchor-link
            href="#Education"
            title="Education Background"
          />
          <a-anchor-link
            href="#Ability"
            title="Ability"
          />
          <a-anchor-link href="#Project" title="Project">
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
   }

})
</script>

<style>

</style>