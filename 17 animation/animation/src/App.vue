<template>
  <button @click="flag = !flag">Toggle Button</button>
  <transition name="fade">
    <h1 v-if="flag">Hello Animation</h1>
  </transition>
</template>

<script>
export default {
  name: "App",
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

.fade-leave-to{
  opacity: 0;
}

</style>