<template>
  <el-select @change="changeChannel" clearable v-model="channelId" placeholder="请选择" :value="value">
    <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
	name: 'my-channel',
	props: ['value'],
  data () {
    return {
      // 频道下拉选项数据
      channelOptions: [],
      // 频道ID
      channelId: null,
    }
	},
	 created () {
    this.getChannelOptions()
	},
	methods:{
		 // 获取频道下拉选项数据
    async getChannelOptions(){
     const { data: { data } } = await this.$http.get('channels')
      this.channelOptions = data.channels
		},
		// 选择频道
    changeChannel (value) {
      // 清空的时候值是 '' 不符合后台要求，你应该改成 null  代表查询全部
			 if (value === '') value = null
				// 把 value 数据提交给父组件，让父组件给 reqParams.channel_id赋值。
				 this.$emit('input', value)
    }
	}
}
</script>

<style scoped lang='less'></style>