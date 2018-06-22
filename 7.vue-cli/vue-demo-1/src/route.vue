<template>
  <div id="app">
    <div class="container">
     <router-link to="/home/1">Home</router-link>
     <router-link to="/about">About</router-link>
    </div>
    <hr/>
    <router-view msg="this is a message"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>


</style>
