<template>
  <form action="" class="search-top">
    <input type="text" v-model="searchData">
    <router-link v-bind="{to:'searching/'+searchData}" v-on:click = 'add' class="searching">搜索</router-link>
  </form>
</template>
<script>
  export default {
      data () {
          return {
            searchData: ''
          };
      },
      methods: {
          add: function () {
              this.searchData = '';
          }
     }
  };
</script>
<style scoped>
  .search-top {
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .search-top input {
    width: 80%;
    height: 30px;
    border: 1px solid #eee;
    outline: none;
  }
  .search-top .searching {
    display: inline;
    font-size: 20px;
    color: #333;
  }
</style>
