<template>
  <div>
    <h3>Home</h3>
    <h3>{{ $route.params.id}}</h3>
    <h3>message: {{msg}}</h3>
    <router-link to="/home/news">News</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  watch: {
    /* eslint-disable */
    $route: function (value) {
      console.log('value: ', value);
    },
  },
};
</script>

<style scoped>

</style>
