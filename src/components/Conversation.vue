<template>
  <div class="conversation">
    <div class="header">
      <i class="fa fa-angle-left"
         v-on:click="toBack"></i>
      <p>
        {{ $route.params.conversationId }}
      </p>
    </div>
    <div class="talk-div">
      <ul class="talk-list">
        <li class="talker">
          <img src="" alt="" />
          <div class="message">
            asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
          </div>
        </li>
        <li class="me">
          <img src="" alt="" />
          <div class="message">
            asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
          </div>
        </li>
      </ul>
    </div>
    <div class="typing">
      <input type="text" placeholder="Type message to send...">
      <button type="button" class="btn-submit">Send</button>
    </div>
  </div>
</template>

<script>
import router from '../router.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Conversation'
    }
  },
  methods: {
    toBack () {
      router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

.talk-list{
  padding: 50px 20px;

  .message{
    position: relative;
    padding: 20px;
    background-color: #75cc5b;
    color: #ffffff;
    font-size: 30px;
    line-height: 1.5;
    border-radius: 6px;
    max-width: 250px;
    word-wrap: break-word;
  }

  li{
    margin: 50px 0;
    overflow: hidden;
  }

  li.talker{
    .message{
      float: left;
    }

    .message::after {
      position: absolute;
      display: inline-block;
      content: "";
      top: 30px;
      left: -22px;
      border: 12px solid transparent;
      border-right-color: rgba(117,204,91, 1);
    }

    img{
      float: left;
      margin-right: 20px;
    }
  }

  li.me{
    .message{
      float: right;
    }

    .message::after {
      position: absolute;
      display: inline-block;
      content: "";
      top: 30px;
      right: -22px;
      border: 12px solid transparent;
      border-left-color: rgba(117,204,91, 1);
    }

    img{
      float: right;
      margin-left: 20px;
    }
  }

  img{
    width: 80px;
    height: 80px;
    background-color: pink;
    border-radius: 6px;
    overflow: hidden;
  }
}

.conversation{
  padding-top: 150px;
}

.typing{
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100px;
  padding: 10px 20px;
  z-index: 10;
  font-size: 40px;
  background-color: #ffffff;
  border-top: 2px solid #e4e0e0;

  input{
    width: 70%;
    height: 100%;
    float: left;
    font-size: 40px;
    padding: 0 20px;
    border-radius: 6px;
  }

  button{
    width: 20%;
    height: 100%;
    float: right;
    background-color: #75cc5b;
    color: #ffffff;
    font-size: 40px;
    border-radius: 6px;
  }
}

.header{
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 150px;
  background-color: #75cc5b;
  text-align: center;
  color: #ffffff;
  font-size: 45px;
  line-height: 150px;
  z-index: 10;

  i.fa-angle-left{
    font-size: 65px;
    line-height: 150px;
    margin-left: 20px;
    float: left;
  }
}

</style>
