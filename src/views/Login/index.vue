<template>
    <div class="login-styel">
        <el-form 
        :label-position="labelPosition" 
        label-width="100px" 
        :rules="rules"
        :model="formLabelAlign" 
        style="max-width: 460px">
            <el-form-item label="邮箱" name="email" 
            >
                <el-input v-model="formLabelAlign.email"  />
            </el-form-item>
            <el-form-item label="密码" name="password">
                <el-input v-model="formLabelAlign.password" type="password" />
            </el-form-item>
            <el-form-item label="确认密码" name="password2">
                <el-input v-model="formLabelAlign.password2" type="password" />
            </el-form-item>
        </el-form>
        <el-button @click="Login">登录</el-button>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

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
const Login = () => {
    console.log(formLabelAlign);
}
</script>
<style>
.login-styel {
    border: 2px solid red;
    box-shadow: 2px 2px 10px red;
    border-radius: 10px;
}
</style>