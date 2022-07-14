<template>
    <div class="login-styel">
        <el-form :label-position="labelPosition" label-width="100px" :rules="rules" :model="formLabelAlign"
            style="max-width: 460px">
            <el-form-item label="邮箱" name="email">
                <el-input v-model="formLabelAlign.email" />
            </el-form-item>
            <el-form-item label="密码" name="password">
                <el-input v-model="formLabelAlign.password" type="password" />
            </el-form-item>
            <el-form-item label="确认密码" name="password2">
                <el-input v-model="formLabelAlign.password2" type="password" />
            </el-form-item>
        </el-form>
        <el-button @click="Register">登录</el-button>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

// 注册接口
import {RegisterApi} from '../../request/api'

const labelPosition = ref('right')

const formLabelAlign = reactive({
    email: '',
    password: '',
    password2: '',
})
// 表单规则
const rules = reactive({
    email: [

    ],
    password: [

    ]
})

// 登录 
const Register = async () => {
    console.log(formLabelAlign);
    let res = await RegisterApi(formLabelAlign)
    console.log(res)
}
</script>
<style>
.login-styel {
    border: 2px solid green;
    box-shadow: 2px 2px 10px green;
    border-radius: 10px;
}
</style>