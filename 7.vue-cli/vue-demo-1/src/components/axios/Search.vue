<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchKey"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js';

export default {
  name: 'Search',
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    search() {
      if (this.searchKey.trim()) {
        PubSub.publish('search', this.searchKey);
      }
    },
  },
};
</script>

<style scoped>

</style>
