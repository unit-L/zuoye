<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
        <div>主页</div>
      </router-link>
      <router-link to="/myfont">
        <img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
        <div>发现</div>
      </router-link>
      <!--<router-link to="/about">About</router-link> |-->
      <router-link to="/main">
        <img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
        <div>消息</div>
      </router-link>
      <router-link to="/content">
        <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
        <div>我的</div>
      </router-link>

      <!--<router-link to="/mymain">主页</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

  *{
    padding: 0;
    margin: 0;
  }
  ul,li{list-style:none;}
  a{text-decoration: none;}
  #nav {
    font-size:12px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    height:50px;
    border-top:1px solid #ccc;
    //line-height:50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    a{
      color:#000;
      img{width: 27px; height:27px;}
      div{height:23px;}
    }
    a:hover{color:#000; text-decoration: none;}
  }
</style>
