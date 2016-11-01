<template>
  <div class="container">
    <h1>WebChat</h1>
    <label for="username" class="label-user">Username: <input id="username" type="text" class="username" placeholder="Username.."></label>
    <label for="pwd" class="label-pwd">Password: <input id="pwd" type="password" class="pwd" placeholder="Password.."></label>
    <button type="button" name="button">Sign in</button>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

button{
  width: 200px;
  height: 100px;
  font-size: 50px;
  line-height: 100px;
  background-color: #75cc5b;
  color: #ffffff;
  display: block;
  margin: 0 auto;
  border: 1px solid #ffffff;
  border-radius: 6px;
  margin-bottom: 50px;
}

.container{
  width: 100%;
  height: 100%;
  background-color: #75cc5b;
  color: #ffffff;
}

h1{
  font-size: 80px;
  text-align: center;
  padding-top: 300px;
}

label{
  display: block;
  font-size: 50px;
  margin: 0 auto;
  text-align: center;
}

.label-user{
  margin: 300px auto 0 auto;
}

.label-pwd{
  margin: 50px auto 0 auto;
}

.username,
.pwd{
  width: 500px;
  height: 60px;
  font-size: 50px;
  padding: 10px;
  border: none;
  border-radius: 6px;
}

.username{
}

.pwd{
  margin: 50px auto;
}

</style>
