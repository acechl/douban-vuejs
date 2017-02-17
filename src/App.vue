
<template>
  <div id="apps">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import header from 'components/header/header';
  export default {
      components: {
          'vue-header': header
      }
  };
</script>
<style  class="scoped">
  #apps
      {
    width: 100%;
   }
   .item {
    float: left;
    width: 33.333%;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  a {
    text-decoration: none;
    color: #333;
    font-size: 20px;
  }
</style>
