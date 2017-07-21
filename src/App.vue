<template>
    <div id="wrapper">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <div>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item>
            <a class="navbar-brand" href="#">
              <i class="glyphicon glyphicon-time"></i>
              干货集中营
            </a>
          </el-menu-item>
          <el-menu-item index="/gank/Android">Android</el-menu-item>
          <el-menu-item index="/gank/iOS">iOS</el-menu-item>
          <el-menu-item index="/gank/休息视频">休息视频</el-menu-item>
          <el-menu-item index="/gank/前端">前端</el-menu-item>
          <el-menu-item index="/gank/拓展资源">拓展资源</el-menu-item>
          <el-menu-item index="/bonus">妹纸</el-menu-item>
        </el-menu>
      </div>
      <div>
        <div class="col-xs-3 col-sm-3 col-sm-push-9">
          <sidebar></sidebar>
        </div>
        <div class="col-xs-3 col-sm-9  col-sm-pull-3">
          <transition name="slide-left">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>

</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    name: 'app',
    components: {
      Sidebar
    }
  }
</script>
<style scoped>
  #particles-js {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>


