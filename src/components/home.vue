<template>
  <el-container class="container">
    <el-header class="top">Header</el-header>

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
</style>
