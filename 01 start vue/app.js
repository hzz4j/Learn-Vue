// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      msg: "Hello Vue",
    };
  },
}).mount("#app");

setTimeout(() => {
    vm.msg = "Learning Vue FrameWork"
}, 2000);
