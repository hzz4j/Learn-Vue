<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Default slot</p>
  </app-form>
</template>

<script>
import AppForm from './components/Form.vue'

export default {
  name: 'App',
  components: {
    AppForm
  }
}
</script>
