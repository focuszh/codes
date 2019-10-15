<template>

  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 12px">
        <vue-header></vue-header>
      </el-header>
      <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
        <vue-menu></vue-menu>
      </el-aside>
      <el-main>
        <vue-main></vue-main>
      </el-main>
      <el-footer>
        <vue-footer></vue-footer>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
    import VueHeader from './VueHeader'
    import VueMenu from './VueMenu'
    import VueMain from './VueMain'
    import VueFooter from './VueFooter'
    export default {
        name: 'Layout',
        components: {VueHeader, VueMenu, VueMain, VueFooter}
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-main {
    height: 700px;
    right:0px;
    position: absolute;
    left: 240px;
    top: 60px;
  }
</style>
