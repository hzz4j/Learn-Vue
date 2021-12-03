<template>
  <Greeting :count="count"></Greeting>
  <User :count="count" @count-change="onCountChange" :countFn="countCB"></User>
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: { Greeting, User },
  data() {
    return {
      count: 25,
    };
  },
  methods: {
    onCountChange(num) {
      console.log("change?",num);
      this.count += num;
    },
    countCB(num){
      this.count += num
    }
  },
};
</script>
