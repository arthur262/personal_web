<template>
<div class="Photo">
  <divid="SelfCard">1</div>
  <div class="Side">
      <a-affix :offset-top="120" style="  position: absolute; right:10%;top:40%;">
        <a-anchor
          :target-offset="targetOffset"
          
        >
          <a-anchor-link
            href="#SelfCard"
            title="Introduce Myself"
            
        ></a-anchor-link>
        </a-anchor>
        </a-affix>
  </div>
  
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
     this.targetOffset = window.innerHeight / 1.5;
   }

})
</script>

<style scoped>

</style>