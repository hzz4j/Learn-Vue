// Vue Model
const vm = Vue.createApp({
  data() {
    return {
      count: 0,
      username: "",
    };
  },
  watch: {
    username(newValue,oldValue){
      setTimeout(()=>{
        this.username = "静默"+this.count++;
      },2000)
    }
  }
}).mount("#app");
