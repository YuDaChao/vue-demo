<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckedAll"/>
    </label>
    <span>
      <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completedSize" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    todos: {
      type: Array,
      required: true,
    },
    selectAllTodos: {
      type: Function,
      required: true,
    },
    clearCompleted: {
      type: Function,
      required: true,
    },
  },
  computed: {
    completedSize() {
      return this.todos.filter(todo => todo.completed).length;
    },
    isCheckedAll: {
      get() {
        return this.todos.length === this.completedSize && this.completedSize > 0;
      },
      set(value) {
        this.selectAllTodos(value);
      },
    },
  },
};
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
