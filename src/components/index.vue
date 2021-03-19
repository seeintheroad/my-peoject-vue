<template>
  <div>
    首页{{data}}
    <el-button @click="click">aaaa</el-button>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return {
        data:sessionStorage.getItem("Authorization")
      }
    },
    methods:{
      click(){
        this.$axios.post('/user/info', {username:'123'}).then((response) => {
        })
      }
    }
  }
</script>

<style scoped>

</style>
