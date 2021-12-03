<template>
  <p v-if="count < 25">{{ msg }}</p>
  <p v-else>Count must be 25  or greater to view this message</p>
</template>

<script>
export default {
    name:'Greeting',
    props:['count'],
    data(){
        return {
            msg: 'Hello World'
        }
    }
}
</script>

<style>

</style>