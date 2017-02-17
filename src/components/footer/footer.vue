<template>
  <div class="footer clearfix">
      <div class="logo">
        <img src="../../img/douban-app-logo.png" alt="">
      </div>
      <div class="msg">
            <p>豆瓣</p>
            <p>在App中刷广播更愉快</p>
      </div>
      <p class="free">免费下载Android客户端</p>
  </div>
</template>
<script>
</script>
<style scoped>
  .clearfix::before,
  .clearfix::after {
    content: "";
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
    display: block;
  }
  .footer .logo img {
    width: 50px;
    height: 60px;
  }
  .footer {
    position: relative;
    width: 100%;
  }
  .footer .logo {
    position: absolute;
    top: 20px;
    left: 18%;
  }
  .footer .msg {
    position: absolute;
    top: 0;
    left: 35%;
    width: 50%;
    margin-top: 15px;
  }
  .footer .msg p {
    width: 100%;
  }
  .footer .free {
    position: absolute;
    top: 70px;
    left: 28%;
    color: #00b600;
  }
</stylescoped>
