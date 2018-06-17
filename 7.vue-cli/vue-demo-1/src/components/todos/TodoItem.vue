<template>
  <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.task}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      bgColor: '#fff',
      isShow: false,
    };
  },
  methods: {
    handleShow(isEnter) {
      if (isEnter) {
        this.bgColor = '#ccc';
        this.isShow = true;
      } else {
        this.bgColor = '#fff';
        this.isShow = false;
      }
    },
  },
};
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
