<template>

  <v-app id="inspire">
    <!-- 左侧边栏 -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <left-side></left-side>
      </v-list>
    </v-navigation-drawer>

    <!-- 顶边栏 -->
    <v-app-bar app color=#FF6347 dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>上海电力大学研究生系统（外网便携平台）</v-toolbar-title>
    </v-app-bar>

    <!--  中间content  -->
    <v-content>
      <breadcrumbs></breadcrumbs>
      <component :is="activeItem"></component>
    </v-content>

    <!--  底边栏  -->
    <v-footer color=#FF6347 app>
      <span class="white--text">&copy; 2022 浙ICP备20001787号-1</span>
    </v-footer>
  </v-app>
</template>

<script>
import LeftSide from './components/leftSide'
import Breadcrumbs from './components/breadcrumbs'
export default {
  components: {
    Breadcrumbs,
    LeftSide,
    index: () => import('./views/index'),
    grade: () => import('./views/grade'),
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    activeItem: 'index'
  }),
  watch: {
    $route (to) {
      const path = to.path
      let route = ''
      const pathArr = path.toString().split('/')
      route = pathArr[pathArr.length - 1]
      console.log(pathArr)
      this.activeItem = route
    }
  },
  created() {
    const pathArr = this.$root.$router.currentRoute.fullPath.split('/')
    console.log(pathArr[pathArr.length - 1])
    if (pathArr[pathArr.length - 1] === "") {
      this.activeItem = "index"
    } else {
      this.activeItem = pathArr[pathArr.length - 1]
    }
  }
}
</script>