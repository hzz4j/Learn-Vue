// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      userName: "静默",
    };
  },
  methods: {
    updateUserName(event) {
      this.userName = event.target.value;
    },
  },
}).mount("#app");
