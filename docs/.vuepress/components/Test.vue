<template>
  <div>
    {{ count }}
  </div>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-button type="success" @click="addCount">加一条</el-button>
        <el-button type="danger" @click="delCount">删一条</el-button>
      </div>
    </template>
    <div v-for="o in list" :key="o" class="text item">{{ o }}</div>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
// import { XMLHttpRequest } from 'xmlhttprequest';
let list = ref([])
const addCount = () => {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://api.7585.net.cn/jscb/api.php');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      list.value.push(xhr.responseText)
    }
  }
  xhr.send();
}
const delCount = () => {
  list.value.length--
}
addCount()


</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  color: #fff
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  margin-top: 20px;
  background-color: pink;
}
</style>