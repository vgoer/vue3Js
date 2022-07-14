<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <RouterLink to="/">
      <el-menu-item index="0">Goer</el-menu-item>
    </RouterLink>
    <div class="flex-grow" />
    <RouterLink to="/echarts">
      <el-menu-item index="1">图表</el-menu-item>
    </RouterLink>
    <el-menu-item index="2">Processing Center</el-menu-item>
    <el-menu-item index="3">Processing Center</el-menu-item>
    <el-menu-item index="4">Processing Center</el-menu-item>
    <el-sub-menu index="5">
      <template #title>Workspace</template>
      <el-menu-item index="5-1">item one</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
      <el-menu-item index="5-3">item three</el-menu-item>
    </el-sub-menu>
    <el-row>
      <RouterLink to="/login">
        <el-button typeof="primary" :icon="Sunny" plain circle />
        <span>登录</span>
      </RouterLink>
      <RouterLink to="/register">
        <el-button type="primary" :icon="Sunrise" plain circle />
        <span>注册</span>
      </RouterLink>
    </el-row>
    <useDark></useDark>
  </el-menu>
</template>
<script setup>
import { ref } from 'vue'

import useDark from '../../components/useDark.vue';
import {
  Sunrise,
  Sunny,
} from '@element-plus/icons-vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>