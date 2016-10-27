<template>
  <div class="container">
    <div class="header">
      Discover
    </div>
    <div class="monents">
      <i class="fa fa-superpowers fl"></i>
      <p>
        Monents
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="qr">
      <i class="fa fa-qrcode fl"></i>
      <p>
        Scan QR Code
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="shake">
      <i class="fa fa-mobile fl"></i>
      <p>
        Shake
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="near-by">
      <i class="fa fa-map-marker fl"></i>
      <p>
        People Nearby
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="bottle">
      <i class="fa fa-tint fl"></i>
      <p>
        Message in a Bottle
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
    <div class="game">
      <i class="fa fa-gamepad fl"></i>
      <p>
        Games
      </p>
      <i class="fa fa-angle-right fr"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Discover'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.monents,
.qr,
.shake,
.near-by,
.bottle,
.game{
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

.monents{
  margin-top: 200px;
}

.qr{
  margin-top: 50px;
  border-bottom: none;
}

.near-by{
  margin-top: 50px;
  border-bottom: none;
}

.game{
  margin-top: 50px;
}

</style>
