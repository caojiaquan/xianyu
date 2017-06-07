<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .slide-fade-enter {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: opacity .5s ease-in-out;
  }
</style>
