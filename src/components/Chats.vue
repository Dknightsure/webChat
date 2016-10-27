<template>
  <div class="container">
    <div class="header">
      Chats
    </div>
    <div class="search-chat">
      <input type="text" placeholder="Message Search" name="text">
    </div>
    <ul class="chat">
      <li v-for="item in chatList"
          v-on:click="toChat(item.conversationId)">
        <img src="" alt="" />
        <p class="talker-name">
          {{ item.name }}
        </p>
        <p class="latest-message">
          {{ item.latestMessage }}
        </p>
        <p class="latest-time">
          {{ item.latestTime }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import chatListTestData from '../testData/chatList.json'
import { router } from '../main.js'

export default {
  data () {
    return {
      chatList: chatListTestData
    }
  },
  methods: {
    toChat (conversationId = 'test') {
      router.push(
        {
          name: 'conversationPage',
          params: { conversationId }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>

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
}

.container{
  padding-bottom: 150px;
}

.search-chat{
  margin-top: 150px;
  width: 100%;
  height: 70px;
  padding-top: 10px;
  background-color: #f5f3ec;

  input{
    display: block;
    width: 90%;
    height: 60px;
    border: none;
    margin: 0 auto;
    border-radius: 6px;
    font-size: 30px;
    line-height: 60px;
    padding: 0 10px;
    color: #8e8b87;
  }
}


ul.chat{
  li{
    padding: 25px 20px;
    height: 100px;
    border-bottom: 2px solid #e4e0e0;
    position: relative;

    img{
      width: 100px;
      height: 100px;
      border-radius: 6px;
      overflow: hidden;
      background-color: #75cc5b;
      float: left;
      margin-right: 20px;
    }

    .talker-name{
      font-size: 38px;
      color: #000000;
    }

    .latest-message{
      font-size: 30px;
      line-height: 45px;
      color: #838384;
    }

    .latest-time{
      position: absolute;
      right: 20px;
      top: 20px;
      color: #838384;
      font-size: 20px;
    }
  }
}


</style>
