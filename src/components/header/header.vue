<template>
  <div id="header" class="clearfix">
    <div class="logo">
      <router-link to="/logo">豆瓣</router-link>
    </div>
    <div class="classify">
      <router-link class="movies" to="/movies">电影</router-link>
      <router-link class="books" to="/book">图书</router-link>
      <router-link class="broadcast" to="/broadcast">广播</router-link>
      <router-link class="team" to="/team">小组</router-link>
      <!--<router-link class="team" to="/team">小组</router-link>-->
      <router-link class="movie-search" to="/search"><img src="../../img/search.png" alt=""></router-link>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .clearfix::before,
  .clearfix::after {
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
    display: block;
    content: "";
  }
  #header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #f3f3f3;
    box-sizing: border-box;
    padding: 0px 18px;
  }
  #header .logo {
      float: left;
    }
  #header .logo a {
      color: #00b600;
      font-size: 22px;
      font-weight: 700;
    }
  #header .classify {
      float: right;
    }
  #header .classify a {
    font-size: 16px;
  }
    #header a {
      line-height: 50px;
    }
    #header img {
      width: 30px;
      vertical-align: middle;
    }
  #header .movies {
      color: #2384E8;
    }
  #header .books {
      color: #9F7860;
    }
  #header .broadcast {
      color: #E4A813;
    }
  #header .team {
    color: #2AB8CC;
  }
</style>
