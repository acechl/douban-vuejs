<template>
  <div class="book">
    <div class="hot">
      <div class="clearfix">
        <p class="title">最爱关注图书 | 虚伪类</p>
        <router-link to="/movie-one" class="more">更多</router-link>
      </div>
      <div class="movie-items clearfix" @touchstart="touchStart" @touchmove="touchMove">
        <div v-for="item in movie_items"  class="movie-item">
          <router-link v-bind="{to:'movie-detail/'+item.id}" class="item-hot" @click="eve" v-bind:id="item.id">
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
      <div class="clearfix">
        <p class="title">最受关注图书 | 非虚构类</p>
        <router-link to="/movie-two" class="more">更多</router-link>
      </div>
      <div class="movie-items clearfix">
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
      <p class="title">发现好图书</p>
      <div class="clearfix">
        <div class="top">
          <router-link to="/both-250">他们还写侦探小说</router-link>
          <router-link to="/uncommon">人生识字始忧患</router-link>
          <router-link to="/movie-age">诗歌书店</router-link>
          <router-link to="/girls-story">尝试理解人类变化无常不可测心理相关小荐</router-link>
        </div>
      </div>
      <div class="clearfix">
        <div class="bottom">
          <router-link to="/science-key">适合下雨，下雪，深夜被窝以及冬夜列车的那些书</router-link>
          <router-link to="/optimistic">如果被迫流亡，我一定要把这些书带在路上</router-link>
        </div>
      </div>
    </div>
    <div class="classify">
      <p class="title">分类浏览</p>
      <div class="classify clearfix">
        <router-link class="clearfix" to="/classics">小说<span>></span></router-link>
        <router-link class="clearfix" to="/well">爱情<span>></span></router-link>
        <router-link class="clearfix" to="/top">历史<span>></span></router-link>
        <router-link class="clearfix" to="/action">外国文学<span>></span></router-link>
        <router-link class="clearfix" to="/comedy">青春<span>></span></router-link>
        <router-link class="clearfix" to="/love">励志<span>></span></router-link>
        <router-link class="clearfix" to="/suspense">随笔<span>></span></router-link>
        <router-link class="clearfix" to="/terror">传记<span>></span></router-link>
        <router-link class="clearfix" to="/science">推理<span>></span></router-link>
        <router-link class="clearfix" to="/cure">旅行<span>></span></router-link>
        <router-link class="clearfix" to="/literature">奇幻<span>></span></router-link>
        <router-link class="clearfix" to="/adult">经管<span>></span></router-link>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<style scoped>
  .clearfix::before,
  .clearfix::after {
    height: 0;
    line-height: 0;
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
  }
  .book {
    padding: 0 18px;
    box-sizing: border-box;
    font-size: 16px;
    overflow: hidden;
  }
  .top ,.bottom {
    /*width: 320%;*/
    margin-bottom: 10px;
  }
  .book .found {
    width: 1030px;
  }
  .book .found a{
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
  .book .classify {
    width: 100%;
  }
  .book .classify a {
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
  .book .classify a:nth-child(2n) {
    margin-left: -1px;
  }
  .book .classify a span {
    float: right;
  }
  .book .title {
    margin: 10px 0px;
  }
  .book .yellow {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url("../../img/yellow.png");
    background-size: 10px;
    margin-left: -10px;
  }
  .book .gray {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url("../../img/gray.png");
    background-size: 10px;
    margin-left: -8px;
  }
  .book .movie-item i:first-child {
    margin-left: 0px;
  }
  .book .movie-item {
    float: left;
    margin-right: 10px;
  }
  .book .title {
    color: #333;
    font-size: 18px;
  }
  .book img {
    width: 100px;
    height: 135px;
  }
  .book .movie-name {
    font-size: 14px;
    color: #333;
    line-height: 35px;
    text-align: center;
  }
  .book .movie-items {
    width: 1760px;
  }
  .book .score {
    line-height: 20px;
    margin-top: -10px;
    text-align: center;
  }
  .book .score span:first-child {
    display: inline-block;
  }
  .book .score span:last-child {
    font-size: 14px;
  }
  .book .more {
    float: right;
    color: #42bd56;
    font-size: 14px;
  }
  .book .hot .title,
  .book .free .title{
    float: left;
  }
</style>
<script>
  import footer from '../footer/footer.vue';
  export default {
      components: {
        'pageFooter': footer
      },
    beforeCreate () {
      console.log('书本组件启动了');
    },
    created () {
      var self = this;
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(function (response) {
          this.word_length(response.body.subjects);
          self.movie_items = response.body.subjects.slice(0, 8);
        }).then(function () {
      });
      this.$http.jsonp('https://api.douban.com/v2/movie/top250')
        .then(function (response) {
          this.word_length(response.body.subjects);
          self.top250_items = response.body.subjects.slice(0, 16);
        }).then(function () {
      });
    },
    data () {
      return {
        movie_items: [],
        top250_items: [],
        weekly_items: [],
        startX: 0,
        distanceX: 0,
        target: null
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
      touchStart: function (event) {
        this.target = event.target.parentNode.parentNode.parentNode.className;
        this.startX = event.touches[0].clientX;
      },
      touchMove: function (event) {
        var moveX = event.touches[0].clientX;
        this.distanceX = moveX - this.startX;
      }
    }
  };
</script>
