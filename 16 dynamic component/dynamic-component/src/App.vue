<template>
  <select v-model="currentComponentNM">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <!-- 保持组件的状态 -->
  <keep-alive>
    <component :is="currentComponentNM"></component>  
  </keep-alive>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
  },
  data() {
    return {
      currentComponentNM: "Home",
    };
  },
};
</script>

