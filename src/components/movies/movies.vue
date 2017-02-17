<template>
  <div class="movies">
    <div class="hot clearfix">
      <p class="title">影院热映</p>
      <router-link to="/movie-one" class="more">更多</router-link>
      <div class="movie-items clearfix" ref="moveElement" id="moving">
        <div v-for="item in movie_items"  class="movie-item">
          <router-link v-bind="{to:'movie-detail/'+item.id}" class="item-hot" v-bind:id="item.id">
            <div>
              <div>
                <img alt="" v-bind:src='item.images.large'>
                <p v-text="item.title" class="movie-name"></p>
              </div>
            </div>
            <div class="score">
              <span>
                <i v-bind:class= "{yellow: item.rating.stars >= 10,gray: item.rating.stars < 10}"></i>
                <i v-bind:class= "{yellow: item.rating.stars >= 20,gray: item.rating.stars < 20}"></i>
                <i v-bind:class= "{yellow: item.rating.stars >= 30,gray: item.rating.stars < 30}"></i>
                <i v-bind:class= "{yellow: item.rating.stars >= 40,gray: item.rating.stars < 40}"></i>
                <i v-bind:class= "{yellow: item.rating.stars >= 50,gray: item.rating.stars < 50}"></i>
              </span>
              <span>
                <span v-text="item.rating.average"></span>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="free">
      <p class="title">免费在线观影</p>
      <router-link to="/movie-two" class="more">更多</router-link>
      <div class="movie-items clearfix" ref="moveFree">
        <div v-for="item in top250_items" class="movie-item">
          <router-link v-bind="{to:'movie-detail/'+item.id}">
            <img alt="" v-bind:src="item.images.large">
            <p v-text="item.title" class="movie-name"></p>
            <div class="score">
              <span>
              <i v-bind:class= "{yellow: item.rating.stars >= 10,gray: item.rating.stars < 10}"></i>
              <i v-bind:class= "{yellow: item.rating.stars >= 20,gray: item.rating.stars < 20}"></i>
              <i v-bind:class= "{yellow: item.rating.stars >= 30,gray: item.rating.stars < 30}"></i>
              <i v-bind:class= "{yellow: item.rating.stars >= 40,gray: item.rating.stars < 40}"></i>
              <i v-bind:class= "{yellow: item.rating.stars >= 50,gray: item.rating.stars < 50}"></i>
              </span>
              <span v-text="item.rating.average"></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="found">
      <p class="title">发现好电影</p>
        <div class="movies-top clearfix">
          <router-link to="/both-250">同时入选IMDB250和豆瓣电影250的电影</router-link>
          <router-link to="/uncommon">带你进入不正常的世界</router-link>
          <router-link to="/movie-age">用电【影】来祭祀逝去的岁月</router-link>
          <router-link to="/girls-story">女孩们的故事【电影】</router-link>
        </div>
        <div class="movies-bottom clearfix">
          <router-link to="/science-key">科幻是未来的钥匙--科幻启示录【科幻题材】</router-link>
          <router-link to="/optimistic">美国生活面面观</router-link>
          <router-link to="/2015-final">2015终极期待</router-link>
          <router-link to="/korean-100">经典韩国电影--收集100部</router-link>
        </div>
    </div>
    <div class="classify">
      <p class="title">分类浏览</p>
      <div class="classify clearfix">
        <router-link class="clearfix" to="/classics">经典<span>></span></router-link>
        <router-link class="clearfix" to="/well">冷门佳片<span>></span></router-link>
        <router-link class="clearfix" to="/top">豆瓣高分<span>></span></router-link>
        <router-link class="clearfix" to="/action">动作<span>></span></router-link>
        <router-link class="clearfix" to="/comedy">喜剧<span>></span></router-link>
        <router-link class="clearfix" to="/love">爱情<span>></span></router-link>
        <router-link class="clearfix" to="/suspense">悬疑<span>></span></router-link>
        <router-link class="clearfix" to="/terror">恐怖<span>></span></router-link>
        <router-link class="clearfix" to="/science">科幻<span>></span></router-link>
        <router-link class="clearfix" to="/cure">治愈<span>></span></router-link>
        <router-link class="clearfix" to="/literature">文艺<span>></span></router-link>
        <router-link class="clearfix" to="/adult">成长<span>></span></router-link>
        <router-link class="clearfix" to="/cartoon">动画<span>></span></router-link>
        <router-link class="clearfix" to="/chinese">华语<span>></span></router-link>
        <router-link class="clearfix" to="/american">欧美<span>></span></router-link>
        <router-link class="clearfix" to="/korean">韩国<span>></span></router-link>
        <router-link class="clearfix" to="/japan">日本<span>></span></router-link>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<style>
  .clearfix::before,
  .clearfix::after {
    height: 0;
    line-height: 0;
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
  }
  .movies {
    padding: 0 16px;
    box-sizing: border-box;
    font-size: 16px;
    overflow: hidden;
  }
  .movies-top ,.movies-bottom {
    /*width: 320%;*/
    margin-bottom: 10px;
  }
  .movies .found {
    width: 1030px;
  }
  .movies .found a{
    box-sizing: border-box;
    float: left;
    border: 1px solid #eee;
    border-radius: 5px;
    line-height: 50px;
    height: 50px;
    padding: 0px 10px;
    margin-right: 10px;
    font-size: 18px;
  }
  .movies .classify {
    width: 100%;
  }
  .movies .classify a {
    width: 50%;
    box-sizing: border-box;
    border: 1px solid #eee;
    float: left;
    padding: 0 10px;
    line-height: 50px;
    height: 50px;
    color: #42bd56;
    font-size: 16px;
    margin-top: -1px;
  }
  .movies .classify a:nth-child(2n) {
    margin-left: -1px;
  }
  .movies .classify a span {
    float: right;
  }
  .movies .title {
    margin: 10px 0px;
  }
  .movies .yellow {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url("../../img/yellow.png");
    background-size: 10px;
    margin-left: -10px;
  }
  .movies .gray {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url("../../img/gray.png");
    background-size: 10px;
    margin-left: -8px;
  }
  .movies .movie-item i:first-child {
    margin-left: 0px;
  }
  .movies .movie-item {
    float: left;
    margin-right: 10px;
  }
  .movies .title {
    color: #333;
    font-size: 18px;
  }
  .movies img {
    width: 100px;
    height: 135px;
  }
  .movies .movie-name {
    font-size: 14px;
    color: #333;
    line-height: 35px;
    text-align: center;
  }
  .movies .movie-items {
    width: 880px;
  }
  .movies .score {
    line-height: 20px;
    margin-top: -10px;
    text-align: center;
  }
  .movies .score span:first-child {
    display: inline-block;
  }
  .movies .score span:last-child {
    font-size: 14px;
  }
  .movies .more {
    float: right;
    color: #42bd56;
    font-size: 14px;
  }
  .movies .hot .title,
  .movies .free .title{
    float: left;
  }
</style>
<script>
  import footer from '../footer/footer.vue';
  import BScroll from 'better-scroll';
  export default {
      components: {
          'pageFooter': footer
      },
      beforeCreate () {
        console.log('电影组件启动了');
      },
      created () {
          var self = this;
          this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
            .then(function (response) {
              this.word_length(response.body.subjects);
              this.movie_items = response.body.subjects.slice(0, 8);
              this.$nextTick(function () {
                console.log(44);
                var obj = document.getElementById('moving');
                console.log(obj);
                this._initScroll(obj);
              });
            }).then(function () {
          });
        this.$http.jsonp('https://api.douban.com/v2/movie/top250')
          .then(function (response) {
            this.word_length(response.body.subjects);
              self.top250_items = response.body.subjects.slice(0, 8);
              this.$nextTick(() => {
                  this._initScroll(this.$refs.moveFree);
                console.log(this.$refs.moveFree);
              });
          }).then(function () {
        });
      },
    data () {
      return {
        movie_items: [],
        top250_items: []
      };
    },
    methods: {
      word_length: function (obj) {
          obj.forEach(function (item) {
            if (item.title.length > 6) {
              item.title = item.title.substring(0, 5) + '...';
            };
          });
      },
      _initScroll: function (obj) {
        console.log(66);
        /* eslint-disable no-new */
         new BScroll(obj, {
          startX: 0,
          scrollX: true,
          eventPassthrough: 'vertical',
          click: true
        });
      }
    }
  };
</script>

