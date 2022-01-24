<template>
  <div class="contact">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 15 }"
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <!-- 选择框-->
      <h1 class="w2" style="margin: 2ch 0 2ch 6ch">Contact Me</h1>
      <a-form-item
        label="How address you?"
        :rules="[{ required: false, message: 'Please choose your address!' }]"
      >
        <a-radio-group v-model:value="formState.address">
          <a-radio-button value="She">She/Her</a-radio-button>
          <a-radio-button value="He">He/Him</a-radio-button>
          <a-radio-button value="They">They/Them</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <!--Name-->
      <a-form-item
        label="Name"
        name="Name"
        :rules="[{ required: true, message: 'Please input your Name!' }]"
      >
        <a-input
          v-model:value="formState.Name"
          placeholder="Please Enter your Name"
        />
      </a-form-item>
      <!--Email-->
      <a-form-item
        label="Email"
        name="Email"
        :rules="[{ required: true, message: 'Please input your Email!' }]"
      >
        <a-input
          v-model:value="formState.Email"
          placeholder="Please Enter your Email"
        />
      </a-form-item>
      <!--Purpose-->
      <a-form-item label="Contact Purpose" name="Purpose">
        <a-cascader
          v-model:value="formState.Purpose"
          :options="options"
          placeholder="Please select"
        />
      </a-form-item>
      <!--subject-->
      <a-form-item
        label="Subject"
        name="Subject"
        :rules="[{ required: false, message: 'Please input your subject!' }]"
      >
        <a-input
          v-model:value="formState.Subject"
          placeholder="Please Enter your Name"
        />
        <div style="height: 3ch"></div>
        <!--具体的-->
      </a-form-item>
      <a-form-item label="Message" name="Message">
        <a-textarea
          v-model:value="formState.Message"
          placeholder="Your message"
          :rows="4"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 18, span: 1 }">
        <a-button type="primary" html-type="submit" @click="submit()"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
const options = [
  {
    value: "Job",
    label: "Job",
  },
  {
    value: "Comunicate",
    label: "Comunicate",
  },
  {
    value: "Other",
    label: "Other",
  },
];
import emailjs from "@emailjs/browser";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      address: "",
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
      Purpose: [],
    });

    const onFinish = () => {};

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const Purpose = ref([]);
    const value1 = ref("");

    return {
      formState,
      onFinish,
      onFinishFailed,
      Purpose,
      value1,
      options,
    };
  },
  data() {
    return {};
  },
  methods: {
    submit() {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          {
            email: this.formState.Email, name: this.formState.Name, subject: this.formState.Subject, text: this.formState.Message
          },
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
});
</script>

<style lang="less" scoped>
.contact {
  position: relative;
  max-width: 100%;
  width: 50%;
  min-width: 60vh;
  margin: 5ch auto 0;
  padding: 2ch;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 1.5ch;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  justify-content: center;
}
</style>
