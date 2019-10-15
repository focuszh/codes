<template>
  <div><el-dropdown>
    <i class="el-icon-setting" style="margin-right: 15px"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>修改密码</el-dropdown-item>
      <el-dropdown-item>登出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
    <span>用户名</span>
  </div>
</template>

<script>
    export default {
        name: 'VueHeader'
    }
</script>

<style scoped>

</style>
