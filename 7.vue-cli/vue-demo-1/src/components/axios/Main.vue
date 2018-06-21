<template>
  <div class="row">
    <p v-if="showTips">请输入关键字搜索</p>
    <p v-if="loading">努力加载中.....</p>
    <p v-if="errorMsg">加载失败！</p>
    <div v-else class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PubSub from 'pubsub-js';

export default {
  name: 'Main',
  data() {
    return {
      loading: false,
      users: null,
      errorMsg: null,
      showTips: true,
    };
  },

  mounted() {
    PubSub.subscribe('search', (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`;
      this.loading = true;
      this.users = null;
      this.errorMsg = null;
      this.showTips = false;
      axios.get(url).then((resp) => {
        this.loading = false;
        this.errorMsg = null;
        this.showTips = false;
        const data = resp.data;
        this.users = data.items.map(user => ({
          url: user.url,
          avatar_url: user.avatar_url,
          name: user.login,
        }));
      }).catch((error) => {
        this.loading = false;
        this.users = null;
        this.errorMsg = true;
        this.showTips = false;
        alert(error); // eslint-disable-line
      });
    });
  },

};
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
