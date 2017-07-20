<template>
  <div id="wrapper">
    <div>
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item>
          <a class="navbar-brand" href="#">
            <i class="glyphicon glyphicon-time"></i>
            干货集中营
          </a>
        </el-menu-item>
        <el-menu-item index="/android">Android</el-menu-item>
        <el-menu-item index="/ios">iOS</el-menu-item>
        <el-menu-item index="/video">休息视频</el-menu-item>
        <el-menu-item index="/js">前端</el-menu-item>
        <el-menu-item index="/res">拓展资源</el-menu-item>
        <el-menu-item index="/bonus">妹纸</el-menu-item>
      </el-menu>
    </div>
    <div>
      <div class="col-xs-3 col-sm-3 col-sm-push-9">
        <sidebar></sidebar>
      </div>
      <div class="col-xs-3 col-sm-9  col-sm-pull-3">
        <router-view></router-view>
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

