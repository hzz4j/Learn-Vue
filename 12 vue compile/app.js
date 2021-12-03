Vue.createApp({
  data() {
    return {
      msg: "Hello World 1",
    };
  },
  template: `{{msg}}`
}).mount('#app1');



Vue.createApp({
    data() {
      return {
        msg: "Hello World 2",
      };
    },
    render(){
        return Vue.h(
            'h1',
            this.msg
        )
    }
  }).mount('#app2');