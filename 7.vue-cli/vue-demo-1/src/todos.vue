<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoInput :addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo" />
        <TodoFooter :todos="todos"
                    :selectAllTodos="selectAllTodos"
                    :clearCompleted="clearCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from './components/todos/TodoInput';
import TodoList from './components/todos/TodoList';
import TodoFooter from './components/todos/TodoFooter';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    selectAllTodos(value) {
      this.todos.forEach(todo => todo.completed = value); // eslint-disable-line
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
  },

  // 监视
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: function (value) { // eslint-disable-line
        window.localStorage.setItem('todos', JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }


  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
