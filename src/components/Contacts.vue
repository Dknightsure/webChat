<template>
  <div class="container">
    <div class="header">
      Contacts
    </div>
    <div class="search-chat">
      <input type="text" placeholder="Contacts Search" name="text">
    </div>
    <ul class="contacts">
      <li v-for="item in contactsList"
          v-on:click="toUserProfile(item.userId)">
        <img src="" alt="" />
        <p>
          {{ item.alias }}
        </p>
      </li>
    </ul>
    <p class="num-of-persons">
      {{ contactsList.length + ' contacts(s)' }}
    </p>
  </div>
</template>

<script>
import contactsListTestData from '../testData/contactsList.json'
import router from '../router.js'

export default {
  name: 'hello',
  data () {
    return {
      contactsList: contactsListTestData
    }
  },
  methods: {
    toUserProfile (userId) {
      router.push(
        {
          name: 'profilePage',
          params: { userId }
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

ul.contacts{
  li{
    padding: 25px 20px;
    height: 80px;
    border-bottom: 2px solid #e4e0e0;
    position: relative;
    overflow: hidden;

    img{
      width: 80px;
      height: 80px;
      border-radius: 6px;
      overflow: hidden;
      background-color: #75cc5b;
      float: left;
      margin-right: 25px;
    }

    p{
      float: left;
      color: #000000;
      font-size: 35px;
      line-height: 80px;
    }
  }
}

.num-of-persons{
  text-align: center;
  font-size: 40px;
  line-height: 130px;
  color: #656363;
}

</style>
