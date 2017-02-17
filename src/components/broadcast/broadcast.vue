
<template>
  <div class="douban-broadcast">
    <div class="download">
        <span class="app">打开APP,回复广播</span>
        <span class="open">打开</span>
        <span class="on-time">极速下载</span>
    </div>
    <div class="register">
      <span class="head-portrait">&#xe608</span>
      <span>登录发广播</span>
      <span class="phone">&#xe634</span>
      <span class="pencil">&#xe639</span>
    </div>
    <p class="more"><a href="javascript:void(0)">显示更多广播</a></p>
   <pageFooter></pageFooter>
  </div>
</template>
<script>
  import pageFooter from '../footer/footer.vue';
  export default({
      components: {
          'pageFooter': pageFooter
      }
  });
</script>
<style>
  @font-face {
    font-family: douban-broadcast;
    src: url('../../fonts/iconfont.eot'); /* IE9*/
    src: url('../../fonts/iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
    url('../../fonts/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../../fonts/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../../fonts/iconfont.svg') format('svg'); /* iOS 4.1- */
  }
  .douban-broadcast {
    font-family: douban-broadcast;
  }
  .douban-broadcast .download {
    height: 70px;
    width: 100%;
    background: url("../../img/promotion_bg.jpg") 0 0;
    background-size: 100% 70px;
  }
  .douban-broadcast .download .app {
    display: inline-block;
    color: #2CA532;
    height: 70px;
    line-height: 70px;
    font-size: 14px;
    margin-left: 10%;
  }
  .douban-broadcast .download .on-time {
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
  .douban-broadcast .download .open {
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
  .douban-broadcast .register {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
    line-height: 60px;
    font-size: 20px;
  }
  .douban-broadcast .register span {
    font-size: 20px;
    line-height: 40px;
  }
  .douban-broadcast .register .head-portrait {
    display: inline-block;
    margin-left: 10%;
    background-color: #eee;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 15px;
    text-align: center;
  }
  .douban-broadcast .register .pencil {
    margin-right: 15px;
    margin-top: 10px;
    font-size: 20px;
    float: right;
  }
  .douban-broadcast .register .phone {
    margin-right: 18px;
    font-size: 20px;
    float: right;
    margin-top: 10px;
  }
  .douban-broadcast .more{
    width: 100%;
    text-align: center;
    color: #42bd56
  }

</style>
