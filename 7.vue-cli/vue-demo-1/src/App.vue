<template>
  <div id="app">
    You Click {{$store.state.count}} times, count is {{evenOrOdd}}<br/>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(['evenOrOdd']),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
  ]),
};
</script>

<style>


</style>
