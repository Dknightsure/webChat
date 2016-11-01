<template>
  <div id="app">
    <router-link to="/Main/Chats" class="outer-link"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/Main'
import Conversation from './components/Conversation'
export default {
  name: 'app',
  components: {
    'main-page': Main,
    'conversation-page': Conversation
  }
}
</script>

<style lang="scss">
html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,img,dl,dt,dd,ul,ol,li,nav,footer,header,
form,input,textarea,video,audio,iframe,button,pre,code,blockquote,q,
fieldset,legend,caption,object,article,aside,details,figcaption,figure,hgroup,menu,section {margin:0;padding:0;border:0;font-size:100%;}
body,button,input,select,textarea {font:14px/1.4286 "microsoft yahei",simsun,tahoma,arial,sans-serif;}
h1,h2,h3,h4,h5,h6 {font-size:100%;font-weight:500;}
a,ins {text-decoration:none;}
a {color: #000;}
audio,canvas,video {display:inline-block;*display:inline;*zoom:1;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,iframe,main {display:block;}
abbr,acronym {border:0;font-variant:normal;}
del {text-decoration:line-through;}
caption,th {text-align:left;}
sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline;}
sup {top:-0.5em;}
sub {bottom:-0.25em;}
img {vertical-align:middle;}
ol,ul {list-style:none;}
table {border-collapse:collapse;border-spacing:0;}
table,tbody,tfoot,thead,tr,th,td {padding:0;}
address,caption,cite,code,dfn,th,var,em,i,time {font-style:normal;font-weight:500;}
blockquote,q {quotes:none;}
blockquote:before,blockquote:after,q:before,q:after {content:'';content:none;}
hr {display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0;}
button,input,select,textarea,:focus {outline:none;}

.clearfix:after{
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size:0;
}

.clearfix{
    *zoom:1;
}

.fl{
    float: left;
}

.fr{
    float: right;
}

ul.nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: #f5f3ec;
  z-index: 10;

  li{
    float: left;
    width: 25%;
    height: 100%;
    text-align: center;

    a{
      display: block;
      width: 100%;
      height: 100%;
      color: #5a5555;
    }

    a.active{
      color: #75cc5b;
    }

    i{
      display: block;
      width: 50px;
      height: 50px;
      margin: 0 auto;
      padding-top: 30px;
    }

    p{
      margin-top: 15px;
      font-size: 22px;
    }
  }
}

.outer-link{
  display: none;
}

html,
body{
  width: 100%;
  height: 100%;
}

#app{
  width: 100%;
  height: 100%;
}

</style>
