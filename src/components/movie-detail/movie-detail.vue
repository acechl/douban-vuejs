<template>
  <div class="movies-detail">
    <div>
      <div class="download">
        <span class="app">打开APP,回复广播</span>
        <span class="open">打开</span>
        <span class="on-time">极速下载</span>
        <p>查看导演的其他电影</p>
      </div>
      <div class="detail" v-for="item in list">
        <h2 v-text="item.alt_title"></h2>
        <img v-bind:src="item.image" alt="">
        <div class="msg">
          <p class="rating">
          <span>
                <i v-bind:class= "{yellow: item.rating.average >= 2,gray: item.rating.average < 2}"></i>
                <i v-bind:class= "{yellow: item.rating.average >= 4,gray: item.rating.average < 4}"></i>
                <i v-bind:class= "{yellow: item.rating.average >= 6,gray: item.rating.average < 6}"></i>
                <i v-bind:class= "{yellow: item.rating.average >= 8,gray: item.rating.average < 8}"></i>
                <i v-bind:class= "{yellow: item.rating.average >= 10,gray: item.rating.average < 10}"></i>
          </span>
            <span v-text="item.rating.average"></span>
            <span v-text="item.rating.numRaters"></span><span>评价</span>
          </p>
          <p class="author">
            <span v-text="item.attrs.movie_duration[0]"></span>/
            <span v-text="item.attrs.movie_type[0]"></span>/
            <span v-text="item.attrs.director[0]"></span><span>(导演)</span>/
            <span v-text="item.attrs.director[0]"></span>/
            <span v-text="item.attrs.director[1]"></span>/
            <span v-text="item.attrs.pubdate[2]"></span>
            <span v-text="">上映</span>
          </p>
          <p class="more"><a href="javascript:void(0)">用APP查看影人资料</a></p>
        </div>
        <div class="summary">
          <h4>电影简介</h4>
          <p v-text="item.summary"></p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .movies-detail .download {
    position: relative;
    height: 70px;
    width: 100%;
    background: url("../../img/promotion_bg.jpg") 0 0;
    background-size: 100% 70px;
  }
  .movies-detail .download p {
    position: absolute;
    top: 30px;
    left: 8%;
  }
  .movies-detail .download .app {
    display: inline-block;
    color: #2CA532;
    height: 70px;
    line-height: 70px;
    font-size: 14px;
    margin-left: 10%;
  }
  .movies-detail .download .on-time {
    float: right;
    background-color: #2CA532;
    color: #fff;
    height: 26px;
    width: 80px;
    border-radius: 3px;
    font-size: 12px;
    margin-top: 15px;
    line-height: 26px;
    text-align: center;
    margin-right: 10px;
    font-size: 20px;
  }
  .movies-detail .download .open {
    float: right;
    background-color: #fff;
    color: #2CA532;
    border: 1px solid #2CA532;
    font-size: 12px;
    border-radius: 3px;
    width: 40px;
    height: 26px;
    margin-top: 15px;
    line-height: 26px;
    text-align: center;
    margin-right: 18px;
    font-size: 20px;
  }
  .movies-detail .yellow {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url("../../img/yellow.png");
    background-size: 10px;
    margin-left: -10px;
  }
  .movies-detail .gray {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url("../../img/gray.png");
    background-size: 10px;
    margin-left: -8px;
  }
  .movies-detail .detail {
    width: 100%;
    padding: 0 18px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .movies-detail  h2 {
    font-size: 16px;
    color: #333;
  }
  .movies-detail .detail img {
    float: right;
    width: 15%;
  }
  .movies-detail .detail .msg {
    overflow: hidden;
    padding-right: 20px;
  }
  .movies-detail .msg i {
    margin-left: -8px;
  }
  .movies-detail .rating,
  .movies-detail .author {
    font-size: 14px;
    margin-top: 10px;
  }
  .movies-detail .summary p{
     text-indent: 2em;
  }
  .movies-detail .more a{
    font-size: 14px;
    color: #00b600;
  }
  .movies-detail .msg i:first-child {
    margin-left: 0px;
  }
</style>
<script>
  export default {
      data () {
          return {
              idNum: '',
              list: []
          };
      },
      beforeCreate () {
        console.log('电影详情启动了');
      },
    created () {
      this.idNum = this.$route.params.id;
      this.$http.jsonp('https://api.douban.com/v2/movie/' + this.idNum)
            .then(function (response) {
              console.log(response);
              console.log(response.body);
              this.list.push(response.body);
            }).then(function () {
          });
    }
  };
</script>

