<template>
  <div>
    {{ count }}
  </div>
  <el-button type="success" @click="addCount">++++</el-button>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>
<script setup>
import {ref} from 'vue'
let count=ref(0)
const addCount=()=>{
  count.value++
}
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  color:#fff
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