<template>



  <div class="Side">
    <div style="height:10vh;" id="SelfCard">1</div>
    <div style="height:100vh; border:1px solid red;" id="sss">2</div>
      <a-affix :offset-top="120" style="  position: absolute; right:10%;top:40%;">
        <a-anchor
        
          :target-offset="targetOffset"
          @click="custormAnchor"
          
        >
          <a-anchor-link
        wrapperStyle="color:red;"
          href="SelfCard"
            title="Introduce Myself"
             
            
        >    </a-anchor-link>
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

<style scoped>
.xx{
  color:red;
}

</style>