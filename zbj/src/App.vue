<template>
  <div id="app">
    <div class="top">
      <div class="top2 clear">
        <p>REALSTATE地产，您居家置业最信赖的地产！</p>
        <ul class=" clear">
          <li><img src="./assets/2.jpg" alt=""></li>
          <li><img src="./assets/3.jpg" alt=""></li>
          <li><img src="./assets/4.jpg" alt=""></li>
          <li><img src="./assets/5.jpg" alt=""></li>
        </ul>
      </div>
    </div>
    <div id="nav">
      <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xMzNkM2NmMThmYzMxOGQwNTE5MWRjNzIwOTI3ZmFhNS5wbmc_p_p100_p_3D.png" alt="">
      <ul>
        <li><router-link to="/">首页</router-link> </li>
        <li><router-link to="/quanxin/1">全新楼盘</router-link></li>
        <li><router-link to="/quanxin/2">二手楼盘</router-link></li>
        <li><router-link to="/quanxin/3">全新商铺</router-link></li>
        <li><router-link to="/">楼市动态</router-link> </li>
        <li><router-link to="/">联系我们</router-link></li>
      </ul>
      <router-link to="">008-6666 6666<span>咨询电话</span></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

</script>
<style>

  *{
    padding:0;
    margin:0;
    text-decoration:none;
    list-style:none;
  }
  .clear:after {
    display:block;
    content:'';
    clear:both;
  }
  .clear {
    zoom:1;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    width: 1190px;
    height: 100px;
    margin:0 auto;
    line-height: 100px;
  }
  #nav>img{
    float: left;
    padding:20px 0;
  }
  #nav>a span{
    width: 86px;
    height: 31px;
    color: white;
    line-height: 31px;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
    background-color: #3A79E8;
  }
  #nav ul{
    float: right;
    margin-left: 220px;
  }
  #nav ul li{
    float: left;
    margin:0 20px;
  }
  #nav li>a{
    color: black;
    padding: 12px 0;
    font-size: 14px;
  }
  #nav>a:last-of-type{
    color: #ccc;
    float: right;
    padding-left: 20px;
    background-image: url('img/7.jpg');
    background-repeat: no-repeat;
    background-position: center left;
  }
  #nav ul{
    float: left;
  }
  .top{
    width: 100%;
    height: 64px;
    line-height: 64px;
    background-color: black;
  }
  .top2{
    width: 1190px;
    margin:0 auto;
  }
  .top2 ul{
    float: right;
  }
  .top2 ul li{
    float: left;
  }
  .top p{
    float: left;
    color: #ccc;
  }
  .top2 ul li img{
    width: 24px;
    height: 24px;
    margin-left: 15px;
    display: inline-block;
  }
</style>
