// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      msg: "Hello Vue",
      firstName: "Q10",
      lastName: "Viking",
    };
  },

  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.msg = "Learning Vue FrameWork";
// }, 2000);
