<template>
  <div class="profile">
    <div class="header">
      Profile
    </div>
    <div class="avatar">
      <img src="" alt="" />
      <p class="name">
        Alias
      </p>
      <p>
        WeChat ID: ID
      </p>
      <p>
        Name: Sure Hu
      </p>
    </div>
    <div class="remark">
      <i class="fa fa-angle-right fr"></i>
      <p>
        Set Remark and Tag
      </p>
    </div>
    <ul class="person-file">
      <li>
        <p class="label">
          Region
        </p>
        <p class="label-value">
          Xiamen
        </p>
      </li>
      <li>
        <p class="label">
          Gender
        </p>
        <p class="label-value">
          Male
        </p>
      </li>
      <li>
        <p class="label">
          What's up
        </p>
        <p class="label-value">
          Everything's possible
        </p>
      </li>
    </ul>
    <button type="button" class="message">Message</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Profile'
    }
  }
}
</script>

<style lang="scss" scoped>

.message{
  display: block;
  width: 90%;
  height: 120px;
  background-color: #75cc5b;
  font-size: 60px;
  line-height: 120px;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  margin: 200px auto 0 auto;
}

ul.person-file{
  margin-top: 50px;
  border-top: 2px solid #e4e0e0;

  li{
    border-bottom: 2px solid #e4e0e0;
    padding: 10px 20px;
    height: 80px;

    p{
      float: left;
      font-size: 40px;
      line-height: 80px;
    }

    p.label{
      width: 250px;
      color: #7b7676;
    }
  }
}

.avatar{
  padding: 25px 20px;
  height: 150px;
  margin-top: 50px;
  border-top: 2px solid #e4e0e0;
  border-bottom: 2px solid #e4e0e0;

  img{
    width: 150px;
    height: 150px;
    background-color: #75cc5b;
    float: left;
    margin-right: 20px;
  }

  p.name{
    font-size: 50px;
    color: #000000;
  }

  p{
    font-size: 25px;
    color: #736f6f;
  }
}

.remark{
  width: auto;
  height: 80px;
  padding: 10px 20px;
  border-top: 2px solid #e4e0e0;
  border-bottom: 2px solid #e4e0e0;
  margin-top: 50px;

  p{
    font-size: 40px;
    line-height: 80px;
    color: #000000;
  }

  i.fr{
    line-height: 80px;
    font-size: 50px;
    color: #aba7a7;
  }
}

.profile{
  padding-top: 150px;
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
}

h2{
  font-size: 80px;
  text-align: center;
}

</style>
