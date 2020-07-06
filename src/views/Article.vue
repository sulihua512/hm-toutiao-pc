<template>
  <div class='article-container'>
    Article
  </div>
</template>

<script>
export default {
  name: 'my-article',
  created () {
    this.$http.get('articles').then((res) => {
      console.log(res)
    }).catch(() =>
      console.log('请求失败')
    )
  }
}
</script>

<style scoped lang='less'></style>

