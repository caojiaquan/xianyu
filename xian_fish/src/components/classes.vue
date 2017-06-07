<template>
  <div id="classes_body">
    <header class="classes_header">
      <img @click="goback" class="classes_back" src="../assets/img/back.png" alt="">
      <div class="classes_header_title">热门分类</div>
    </header>
    <div class="classes_content">
      <ul>
        <li class="classes_moule">
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
        </li>
        <li class="classes_moule">
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能</p>
          </div>
        </li>
        <li class="classes_moule">
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
        </li>
        <li class="classes_moule">
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
          <div class="classes_module_content">
            <img class="classes_module_img" src="../assets/img/skill.jpg" alt="">
            <p>技能服务</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {

    name: 'classes',

    data() {

      return {}

    },

    methods: {

      goback: function () {

        this.$router.goBack()

      }

    }

  }
</script>

<style scoped>
  @import '../assets/css/classes.css';
</style>
