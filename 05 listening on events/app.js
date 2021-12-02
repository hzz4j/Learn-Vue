// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount(event) {
      this.count++;
    },
  },
}).mount("#app");
