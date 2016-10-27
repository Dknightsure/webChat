<template>
  <div class="container">
    <div class="header">
      Me
    </div>
    <div class="avatar">
      <img src="" alt="" />
      <i class="fa fa-angle-right fr"></i>
      <i class="fa fa-qrcode fr"></i>
      <p>
        Name
      </p>
      <p>
        WeChat ID: LightSure
      </p>
    </div>
    <div class="posts">
      <i class="fa fa-picture-o fl"></i>
      <p>
        My Posts
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="favorites">
      <i class="fa fa-heart fl"></i>
      <p>
        Favorites
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="wallet">
      <i class="fa fa-money fl"></i>
      <p>
        Wallet
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="cards">
      <i class="fa fa-credit-card-alt fl"></i>
      <p>
        Cards & Offers
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="sticker">
      <i class="fa fa-smile-o fl"></i>
      <p>
        Sticker Gallery
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="settings">
      <i class="fa fa-cog fl"></i>
      <p>
        Settings
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Me'
    }
  }
}
</script>

<style lang="scss" scoped>

.avatar{
  padding: 25px 20px;
  height: 150px;
  margin-top: 200px;
  border-top: 2px solid #e4e0e0;
  border-bottom: 2px solid #e4e0e0;

  img{
    width: 150px;
    height: 150px;
    background-color: #75cc5b;
    float: left;
    margin-right: 20px;
  }

  p{
    font-size: 38px;
    line-height: 75px;
  }

  i{
    font-size: 50px;
    line-height: 150px;
  }

  i.fr{
    float: right;
    color: #aba7a7;
  }

  i.fa-qrcode{
    margin-right: 20px;
  }
}

.posts,
.favorites,
.wallet,
.cards,
.sticker,
.settings{
  width: auto;
  height: 80px;
  padding: 10px 20px;
  border-top: 2px solid #e4e0e0;
  border-bottom: 2px solid #e4e0e0;

  i{
    line-height: 80px;
    font-size: 50px;
  }

  i.fl{
    width: 80px;
    height: 80px;
    text-align: center;
    color: #2c8082;
  }

  i.fr{
    color: #aba7a7;
  }

  p{
    float: left;
    font-size: 40px;
    line-height: 80px;
    margin-left: 15px;
    color: #5a5555;
  }
}

.posts{
  margin-top: 50px;
}

.posts,
.favorites,
.wallet{
  border-bottom: none;
}

.sticker,
.settings{
  margin-top: 50px;
}


</style>
