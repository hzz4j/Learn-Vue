// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      userName: "静默",
      description: "Learning Vue",
      blogLink: "https://q10viking.github.io",
      raw_url: '<a href="https://q10viking.github.io" target="_blank">静默 Blog </a>',
    };
  },
}).mount("#app");
