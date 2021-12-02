let vm = Vue.createApp({
  data() {
    return {
      textColor: "",
      isPurpleSelected: false,
      size: 150,
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