<template>
  <div class='setting-container'>
    <el-card>
      <div slot="header">
        <my-bread>个人设置</my-bread>
      </div>
      <!-- 栅格 -->
      <el-row>
        <el-col :span="12">
          <!-- 表单 -->
          <el-form label-width="120px">
            <el-form-item label="编号：">{{userInfo.id}}</el-form-item>
            <el-form-item label="手机：">{{userInfo.mobile}}</el-form-item>
            <el-form-item label="媒体名称：">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="媒体简介：">
              <el-input v-model="userInfo.intro" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item label="联系邮箱：">
              <el-input v-model="userInfo.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="updateUser()" type="primary">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12" class="editAvatar">
          <!-- 上传组件 -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false">
            <img v-if="userInfo.photo" :src="userInfo.photo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p class="edit-photo">修改头像</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus'
import auth from '@/utils/auth'

export default {
  name: 'my-setting',
  data () {
    return {
      // 用户信息
      userInfo: {
        name: '',
        intro: '',
        email: '',
        photo: ''
      },
      // 支持上传组件的数据
      imageUrl: null
    }
  },
  created(){
      this.getUserInfo()
  },
  methods:{
      // 修改用户信息
    async updateUser () {
      try {
        // 准备后台需要的数据
        const { name, intro, email } = this.userInfo
        // 发请求提交
        await this.$http.patch('user/profile', { name, intro, email })
        // 成功提示
        this.$message.success('修改用户信息成功')
        // 同步Home组件的用户名
        eventBus.$emit('updateUserName', name)
        // 同步本地存储的用户名  1获取用户信息  2修改用户信息  3重新存入用户信息
        const user = auth.getUser()
        user.name = name
        auth.setUser(user)
      } catch (e) {
        if (e.response && e.response.status === 409) {
          this.$message.error('媒体名称已存在')
        } else {
          this.$message.error('修改用户信息失败')
        }
      }
    },
      // 获取用户信息
      async getUserInfo(){
          const {data:{data}} = await this.$http.get('user/profile')
          this.userInfo = data
      }
  }
}
</script>

<style scoped lang='less'>
.editAvatar{
    text-align: center;
    .edit-photo{
        font-size: 12px;
        text-align: center;
    }
}

</style>