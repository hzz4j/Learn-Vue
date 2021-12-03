<template>
  <button type="button" @click="onClickCount">Update Count Event</button>
  <button type="button" @click="countFn(3)">Update Count By CB</button>
  <p>The user is {{ count }} count</p>
  <p>{{ countDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  emits:['count-change'],
  props: {
    count: {
      type: Number,
      require: true,
    },
    countFn:{
        type: Function
    }
  },
  computed: {
    countDoubled() {
      return this.count * 2;
    },
  },
  methods: {
      onClickCount(){
          this.$emit('count-change',3);
      }
  }
};
</script>
