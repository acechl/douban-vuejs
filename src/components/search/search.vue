<template>
  <div class="search">
    <searchTop></searchTop>
    <ul class="list clearfix">
      <li>
        <router-link to="/movies">
          <p>电影</p>
          <p>影院热映</p>
        </router-link>
      </li>
      <li>
        <router-link to="/book">
          <p>电视</p>
          <p>正在热播</p>
        </router-link>
      </li>
      <li>
        <router-link to="/book">
          <p>图书</p>
          <p>畅销排行</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>同城</p>
          <p>周末活动</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>小组</p>
          <p>志趣相投</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>音乐</p>
          <p>新碟榜</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>阅读</p>
          <p>电子书</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>游戏</p>
          <p>虚拟世界</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>应用</p>
          <p>玩手机</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>东西</p>
          <p>心爱之物</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>FM</p>
          <p>红心歌单</p>
        </router-link>
      </li>
      <li>
        <router-link to="/movies">
          <p>市集</p>
          <p>购买原创</p>
        </router-link>
      </li>
    </ul>
    <ul class="login clearfix">
      <li><a href="javascript:void(0)">注册账号</a></li>
      <li><a href="javascript:void(0)">登录豆瓣</a></li>
      <li><a href="javascript:void(0)">使用桌面版</a></li>
      <li><a href="javascript:void(0)">使用豆瓣APP</a></li>
    </ul>
  </div>
</template>
<script>
  import searchTop from '../search-top/search-top';
  export default({
      components: {
          'searchTop': searchTop
      }
  });
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .clearfix::before,
  .clearfix::after {
    content: "";
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
    display: block;
  }
  .search {
    width: 100%;
  }
  .search ul li {
    list-style: none;
    float: left;
  }
  .search .list {
    padding-left: 0px;
  }
  .search .list li {
    width: 33.333%;
    margin-top: 25px;
  }
  .search .login {
    margin-top: 20px;
  }
  .search .login li {
    width: 50%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: -1px;
    text-align: center;
    height: 50px;
  }
  .search .login li a{
    color: #00b600;
    display: block;
    width: 100%;
    border-right: 1px solid #eee;
    line-height: 30px;
    margin-top: 10px;
  }
  .search .login li:nth-child(2n) {
    border-right: none;
  }
  .search .list li p {
    text-align: center;
  }
  .search .login li p:first-child {
    font-size: 30px;
  }
  .search .list li a p:last-child {
    font-size: 16px;
    line-height: 20px;
  }
</style>
