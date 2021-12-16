<template>
  <button @click="flag = !flag">Toggle Button</button>
  <h1 v-if="flag">Hello Animation</h1>
</template>

<script>
export default {
  name:'App',
  data(){
    return {
      flag: false
    }
  }
}
</script>

<style>

</style>