<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      message: 'Hello Vue.js',
    };
  },
};
</script>

<style scoped>
  p {
    color: deeppink;
  }
</style>
