<template>
  <div id="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
    <hr/>
    <div class="todo-container">
      <div class="todo-wrap">
        <div class="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
        <ul class="todo-main">
          <li>
            <label>
              <input type="checkbox"/>
              <span>xxxxx</span>
            </label>
            <button class="btn btn-danger" style="display:none">删除</button>
          </li>
          <li>
            <label>
              <input type="checkbox"/>
              <span>yyyy</span>
            </label>
            <button class="btn btn-danger" style="display:none">删除</button>
          </li>
        </ul>
        <div class="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>
          <span>已完成0</span> / 全部2
        </span>
          <button class="btn btn-danger">清除已完成任务</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Add from './components/Add';
import List from './components/List';

export default {
  name: 'App',
  components: {
    Add,
    List,
  },
  data() {
    return {
      comments: [
        {
          name: 'Jack',
          content: 'Vue is good',
        },
        {
          name: 'Bob',
          content: 'Vue is so easy',
        },
        {
          name: 'Tom',
          content: 'Vue is so so easy',
        },
      ],
    };
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
  },
};
</script>

<style>

</style>
