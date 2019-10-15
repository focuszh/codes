<template>
  <div>
    <div id="function">
      <el-input v-model="input"/>
      <el-button @click="showResult()">计算</el-button></div>
    <div id="result">{{results}}</div>
  </div>
</template>

<script>
    export default {
        name: 'Demo',
        data () {
            return {
                input: '',
                results: ''
            }
        },
        methods: {
            showResult () {
                if (this.input === '') {
                    this.results = '请输入内容'
                    return
                }
                this.results = 'result is ' + this.input
            }
        }
    }
</script>

<style scoped>
  #result {
    text-align: center;
  }

</style>
