<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          干货集中营
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/android">Android</router-link>
          </li>
          <li>
            <router-link to="/ios">iOS</router-link>
          </li>
          <li>
            <router-link to="/video">休息视频</router-link>
          </li>
          <li>
            <router-link to="/js">前端</router-link>
          </li>
          <li>
            <router-link to="/res">拓展资源</router-link>
          </li>
          <li>
            <router-link to="/bonus">妹纸</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
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

