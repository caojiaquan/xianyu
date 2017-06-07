<template>
  <div id="app">
      <!--<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">-->
          <router-view></router-view>
      <!--</transition>-->
  </div>
</template>

<script>
    import Animate from '../node_modules/animate.css'
    export default {
        name: 'app'
    }
</script>

<style>

</style>
