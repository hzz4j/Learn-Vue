let vm = Vue.createApp({
  data() {
    return {
      textColor:"",
      isPurpleSelected: false,
    };
  },
  computed: {
    circle_class() {
      return {
        purple: this.isPurpleSelected,
      };
    },
  },
}).mount("#app");
