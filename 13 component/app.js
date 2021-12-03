const app = Vue.createApp({});
app.component("hello-world", {
  data() {
    return {
      msg: "Hello World",
    };
  },
  template: `{{msg}}`,
});

app.mount("#app");
