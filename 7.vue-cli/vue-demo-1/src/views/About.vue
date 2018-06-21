<template>
  <div>
    <h3>About</h3>
    <router-link to="/about/message">Message</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>

</style>
