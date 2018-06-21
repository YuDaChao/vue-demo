<template>
  <div id="app">
    <div class="container">
      <Search/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Search from './components/axios/Search';
import Main from './components/axios/Main';

export default {
  name: 'App',
  components: {
    Search,
    Main,
  },
};
</script>

<style>


</style>
