<template>
  <a-affix :offset-top="120" style="float: right; margin-top: 20%">
        <a-anchor
          :target-offset="targetOffset"
          
        >
          <a-anchor-link
            href="#components-anchor-demo-basic"
            title="Education Background"
          />
          <a-anchor-link
            href="#components-anchor-demo-static"
            title="Ability"
          />
          <a-anchor-link href="#API" title="Project">
            <a-anchor-link href="#Anchor-Props" title="Simple multi thread server project" />
            <a-anchor-link href="#Anchor-Props" title="Robot Project, Aseba" />
            <a-anchor-link href="#Anchor-Props" title="Simple multi thread server project" />
            <a-anchor-link href="#Link-Props" title="University Course Election Assistance App" />
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