<template>
  <div class="login-wrap">
    <!-- 表单 -->
    <el-form class="login-form" label-position="top" label-width="80px" :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-button class="login-but" @click.prevent="headLogin()" type="success" plain>登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
    async headLogin() {
      console.log(this.formData)
      const res = await this.$http.post(`login`,this.formData)
        console.log(res)
    }
  }
};
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152; 
  /* 百分比布局的居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  background: #fff;
  width: 400px;
  border-radius: 5px;
  padding: 30px;
}
.login-but {
  width: 100%;
}
</style>
