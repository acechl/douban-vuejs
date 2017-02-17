// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; // 引入vue文件
import App from './App'; // 引入了APP.vue组件
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import logo from 'components/logo/logo';
import book from 'components/book/book';
import broadcast from 'components/broadcast/broadcast';
import movies from 'components/movies/movies';
import search from 'components/search/search';
import team from 'components/team/team';
import detail from 'components/movie-detail/movie-detail';
import movieOne from 'components/movie_one/movie_one';
import movieTwo from 'components/movie_two/movie_two';
import searchDetail from 'components/searchDetail/searchDetail';
Vue.use(VueRouter);
Vue.use(VueResource);
// 定义路由
const router = new VueRouter({
  routes: [
    {path: '/logo', component: logo},
    {path: '/book', component: book},
    {path: '/broadcast', component: broadcast},
    {path: '/movies', component: movies},
    {path: '/', redirect: '/movies'},
    {path: '/search', component: search},
    {path: '/team', component: team},
    {path: '/movie-detail/:id', component: detail},
    {path: '/movie-one', component: movieOne},
    {path: '/movie-two', component: movieTwo},
    {path: '/searching/:searchData', component: searchDetail},
    {path: '/searching/movie-detail/:id', component: detail}
  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app', // 将内容挂载到index.html的标签处
  components: { App: App }, // 组件的名称 所以在index.html处可以用<App></App>来引入模板
  router})
  .$mount('#apps');
