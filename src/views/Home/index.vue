<template>
    <div class="common-layout">
        <el-container>
            <!-- 头部 -->
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <!-- 侧边栏 -->
                <el-aside width="200px">
                    <Nav></Nav>
                </el-aside>
                <el-main v-if="$route.meta.index === 0">
                    <router-view #default="{ route, Component }">
                        <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
                            <component :is="Component"></component>
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import Header from '../Header/index.vue'
import Nav from '../Nav/index.vue'
// 动画css
import 'animate.css'

</script>
<style scoped>
</style>