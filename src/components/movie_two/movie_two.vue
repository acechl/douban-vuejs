<template>
  <div class="movie-two">
    <h3>影院热映</h3>
    <div  class="movie-item clearfix">
      <router-link  v-for="item in list" v-bind="{to:'movie-detail/'+item.id}" class="item-hot" @click="eve">
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
</template>
<style scoped>
  .clearfix::before,
  .clearfix::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  .movie-two {
    width: 100%;
    padding: 0 18px;
    box-sizing: border-box;
  }
  .movie-two .yellow {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url("../../img/yellow.png");
    background-size: 10px;
    margin-left: -10px;
  }
  .movie-two .gray {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url("../../img/gray.png");
    background-size: 10px;
    margin-left: -8px;
  }
  .movie-two .movie-item a{
    float: left;
    width: 31%;
    margin: 0 auto;
    margin-right: 3%;
  }
  .movie-two .movie-item a:nth-child(3n) {
    margin-right: 0px;
  }
  .movie-two .movie-item img {
    width: 100%;
  }
  .movie-two .movie-name {
    font-size: 14px;
  }
  .movie-two .score {
    line-height: 20px;
    margin-top: -10px;
    text-align: center;
  }
  .movie-two .score span {
    font-size: 12px;
  }
  .movie-two .score i {
    margin-right: 3px;
  }
</style>
<script>
  export default {
    data () {
      return {
        list: []
      };
    },
    beforeCreate () {
      console.log('子组件启动了');
    },
    created () {
      var self = this;
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(function (response) {
          this.word_length(response.body.subjects);
          self.list = response.body.subjects;
        });
    },
    methods: {
      word_length: function (obj) {
        obj.forEach(function (item) {
          if (item.title.length > 6) {
            item.title = item.title.substring(0, 5) + '...';
          };
        });
      }
    }
  };
</script>

