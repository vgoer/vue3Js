<template>
    <div v-if="$route.meta.index === 0">
        <Home></Home>
        <!-- 主体内容 -->
        <router-view #default="{ route, Component }">
            <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
    <div v-if="$route.meta.index === 1">
        <!-- 主体内容 -->
        <router-view #default="{ route, Component }">
            <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>
<script setup>
import Home from './views/Home/index.vue'
// 动画css
import 'animate.css'

</script>
<style scoped>
</style>