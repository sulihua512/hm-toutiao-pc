<template>
 <div class="login-container">
  <el-card class="my-card">
   <img src="../assets/logo_index.png" alt />
   <el-form ref="loginForm" :model="loginForm" :rules="rules" status-icon>
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
        <el-button  type="primary" style="width:100%" @click="login()">登录</el-button>
    </el-form-item>
   </el-form>
  </el-card>
 </div>
</template>

<script>
export default {
  name: 'my-login',
  data () {
    // 自定义校验函数
    const checkMobile = (rules, value, callback) => {
      // 校验value的值，它必须符合手机格式
      // 格式：1 开头，第二个数字 3-9 之间，9个数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
    // 登录表单数据对象
      loginForm: {
        mobile: '',
        code: ''
      },
      // 校验规则对象
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 指定一个自定义校验函数，失去焦点后触发。
          { validator: checkMobile, strigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 登录前，对整体表单进行校验
      // this.$refs.loginForm  就是组件实例
      this.$refs.loginForm.validate((valid) => {
        // valid 代表整体表单是否校验成功
        if (valid) {
          // 校验成功，进行登录
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
