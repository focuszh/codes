<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>中考</span>
      </template>
      <el-menu-item-group>
        <template slot="title"><span>成绩</span></template>
        <el-menu-item index="1-1"><router-link to="/demo">成绩证明</router-link></el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title"><span>录取</span></template>
        <el-menu-item index="1-2"><router-link to="/hello">录取查询</router-link></el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>高考</span>
      </template>
      <el-menu-item-group>
        <template slot="title"><span>政策</span></template>
        <el-menu-item index="2-1">随迁考生</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title"><span>录取</span></template>
        <el-menu-item index="2-2">录取查询</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: 'VueMenu'
    }
</script>

<style scoped>
.el-menu {
  height: 500px;
  overflow: scroll;
}
</style>
