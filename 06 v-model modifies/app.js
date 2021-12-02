// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      count: 0,
      username: "",
    };
  },
  methods: {
    incrementCount(event) {
      this.count++;
    },
    updateUsername(msg, event) {
      // 使用修饰符来作用
      // event.preventDefault();
      console.log(msg);
      this.username = event.target.value;
    },
  },
}).mount("#app");
