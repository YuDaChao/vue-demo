import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import About from '../views/About';
import News from '../views/News';
import Message from '../views/Message';
import NotFound from '../views/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home/2',
  },
  {
    path: '/home/:id',
    component: Home,
    children: [
      {
        path: 'news',
        component: News,
      },
    ],
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'message',
        component: Message,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default new VueRouter({
  routes,
});
