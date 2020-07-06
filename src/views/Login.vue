<template>
 <div class="login-container">
  <el-card class="my-card">
   <img src="../assets/logo_index.png" alt />
   <el-form ref="form" :model="loginForm" :rules="rules" >
    <el-form-item prop="mobile">
     <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
    </el-form-item>
    <el-form-item prop="code">
     <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
     <el-button>发送验证码</el-button>
    </el-form-item>
    <el-form-item>
     <el-checkbox :value="true" >我已阅读并同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
    <el-form-item>
        <el-button  type="primary" style="width:100%">登录</el-button>
    </el-form-item>
   </el-form>
  </el-card>
 </div>
</template>

<script>
export default {
  name: 'my-login',
  data () {
    return {
    // 登录表单数据对象
      loginForm: {
        mobile: '',
        code: ''
      },
      // 校验规则对象
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
// 全屏容器
.login-container {
 position: absolute;
 left: 0;
 top: 0;
 // 让高度和宽度直接继承窗口大小
 width: 100%;
 height: 100%;
 // center 上下左右居中
 // cover 铺满整个也页面，成比例
 background: url(../assets/login_bg.jpg) no-repeat center/cover;
 .my-card {
  width: 400px;
  height: 350px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  img {
   display: block;
   width: 200px;
   margin: 0 auto 20px;
  }
 }
}
</style>
