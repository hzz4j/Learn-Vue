<template>
  <button @click="flag = !flag">Toggle Button</button>
  <transition name="fade" mode="out-in">
    <h1 v-if="flag" key="main">Hello Animation</h1>
    <h1 v-else key="secondary">静默 learning Vue3</h1>
  </transition>
</template>

<script>
export default {
  name: "Basic-transition",
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2.25s linear;
}

.fade-leave-to {
  opacity: 0;
}
</style>