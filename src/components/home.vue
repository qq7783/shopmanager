<template>
  <el-container class="container">
    <el-header class="top">
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="图片加载失败" />
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <a href="#" class="logout">退出</a>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside class="left" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.container {
  background: red;
  height: 100%;
}
.left {
  background: #ccc;
}
.main {
  background: pink;
}
.middle {
    line-height: 60px;
    text-align: center;
    color: #fff
}
.logout {
  line-height: 60px;
  text-decoration: none;
}
</style>
