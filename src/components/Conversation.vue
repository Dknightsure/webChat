<template>
  <div class="conversation">
    <h1>Conversation {{ $route.params.conversationId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Conversation'
    }
  }
}
</script>

<style lang="scss" scoped>

h1{
  font-size: 80px;
  text-align: center;
}

</style>
