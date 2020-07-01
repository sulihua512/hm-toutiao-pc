<template>
 <div class="login-container">
     <el-card class="my-card">
          <img src="../assets/logo_index.png" alt="">
     </el-card>
 </div>
</template>

<script>
export default {
  name: 'my-login',
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
// 全屏容器
.login-container{
    position: absolute;
    left:0;
    top:0;
    // 让高度和宽度直接继承窗口大小
    width: 100%;
    height: 100%;
    // center 上下左右居中
    // cover 铺满整个也页面，成比例
    background: url(../assets/login_bg.jpg) no-repeat center/cover;
    .my-card{
        width: 400px;
        height: 350px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        img {
            display: block;
            width: 200px;
            margin:0 auto 20px;
        }
    }
}
</style>
