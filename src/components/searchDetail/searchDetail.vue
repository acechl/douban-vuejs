<template>
 <div>
   <searchTop></searchTop>
   <div class="search">
     <h2>影视作品</h2>
     <divn v-for="item in list">
       <router-link v-bind="{to:'movie-detail/'+item.id}" class="clearfix" >
         <img v-bind:src="item.images.medium" v-bind:id="item.id">
         <div class="msg">
           <p v-text="item.original_title"></p>
           <div class="rating">
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
         </div>
       </router-link>
     </divn>
   </div>
 </div>
</template>
<style scoped>
  .clearfix::before,
  .clearfix::after {
    height: 0;
    line-height: 0;
    display: block;
    clear: both;
    overflow: hidden;
    content:"";
  }
  .search a {
    display: block;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .search h2 {
    font-size: 14px;
    margin: 10px 0;
  }
  .search img {
    float: left;
    width: 23%;
    margin-right:20px;
  }
  .search .msg {
    overflow: hidden;
  }
  .search .msg p {
    font-size: 16px;
    line-height: 50px;
    height: 60px;
  }
  .search .msg span {
    font-size: 12px;
  }
  .search .score span:first-child {
    display: inline-block;
  }
  .search .score span:last-child {
    font-size: 14px;
  }
  .search .yellow {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url("../../img/yellow.png");
    background-size: 10px;
    margin-left: -10px;
  }
  .search .gray {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url("../../img/gray.png");
    background-size: 10px;
    margin-left: -8px;
  }
  .search i {
    margin-right: 5px;
  }
  .search i:first-child {
    margin-left: 5px;
  }
  .search .rating {
    height: 20px;
    position: relative;
    top: -30px;
  }
</style>
<script>
  export default {
      data () {
        return {
          search: '',
          list: []
        };
      },
      created () {
          this.search = this.$route.params.searchData;
          var self = this;
          this.$http.jsonp('https://api.douban.com/v2/movie/search?q=' + this.search)
            .then(function (response) {
              self.list = response.body.subjects;
              console.log(response.body);
            });
      }
  };
</script>

