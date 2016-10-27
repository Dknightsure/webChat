<template>
  <div class="main">
    <router-view></router-view>
    <ul class="nav">
      <li>
        <router-link to="/Main/Chats">
          <i class="fa fa-comment-o fa-4x"></i>
          <p>
            Chats
          </p>
        </router-link>
      </li>
      <li>
        <router-link to="/Main/Contacts">
          <i class="fa fa-address-book-o fa-4x"></i>
          <p>
            Contacts
          </p>
        </router-link>
      </li>
      <li>
        <router-link to="/Main/Discover">
          <i class="fa fa-compass fa-4x"></i>
          <p>
            Discover
          </p>
        </router-link>
      </li>
      <li>
        <router-link to="/Main/Me">
          <i class="fa fa-user fa-4x"></i>
          <p>
            Me
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Main'
    }
  }
}
</script>

<style lang="scss">
</style>
