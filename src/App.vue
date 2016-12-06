<template>
  <div id="app">
    <div id="wrapper" class="l_bg">
      <nav class="navbar navbar-default l_deep">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="fa fa-leaf"></i>
            rose框架
          </a>
          <ul class="nav navbar-nav">
            <li><a v-link="'/home'">首页</a></li>
            <li><a v-link="'/time-entries'">起步</a></li>
            <li><a v-link="'/example/rose-table'">API</a></li>
            <li><a v-link="'/example/rose-button'">示例</a></li>
          </ul>
        </div>
      </nav>
      <div class="container main_show">
        <div class="col-sm-3">
          <view-nav></view-nav>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p> -->
  </div>
</template>

<script>
import sidebar from './components/Sidebar.vue'
import viewNav from './components/view/nav.vue'
export default {
    components: {
      sidebar,
      viewNav
    },
    data () {
      return {
        totalTime: 1.5
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
// import Hello from './components/Hello'
// export default {
//   components: {
//     Hello
//   }
// }
</script>

<style>
html {

}
.l_deep{background-color: #1ABC9C!important;}
.l_deep .navbar-nav > li > a{color: #fff!important;}
.l_deep .navbar-brand{color: #fff!important;}
.l_bg{background-color: #f6f6f6; overflow: hidden;}
.main_show{background: #fff; padding-top: 20px; padding-bottom: 20px; margin-bottom: 20px;}

</style>
