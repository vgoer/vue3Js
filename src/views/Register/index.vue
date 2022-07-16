<template>  
    <div class="login-styel">
        <el-form ref="formRef" :label-position="labelPosition" label-width="100px" :rules="rules"
            :model="formLabelAlign" style="max-width: 460px">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model.trim="formLabelAlign.email" />
            </el-form-item>
            <el-form-item label="密码" name="password" prop="password" type="password">
                <el-input v-model.trim="formLabelAlign.password" />
            </el-form-item>
            <el-form-item label="确认密码" name="password2" prop="checkPass">
                <el-input v-model.trim="formLabelAlign.password2" type="password" />
            </el-form-item>
        </el-form>

        <el-form-item>
            <el-button type="primary" @click="Register(formRef)">Submit</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue'

// 注册接口
import { RegisterApi } from '../../request/api'

const formRef = ref()
const labelPosition = ref('right')

const formLabelAlign = reactive({
    email: '',
    password: '',
    password2: '',
})
// 表单规则
const rules = reactive({
    email: [
        {
            required: true,
            message: '请输入邮箱',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: '请输入正确的邮箱格式',
            trigger: ['blur', 'change'],
        },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, message: '至少输入5个字符', trigger: 'blur' },
    ],
    password2: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, message: '至少输入5个字符', trigger: 'blur' },
    ],
})


// 登录 
const Register = async () => {
    if (formLabelAlign.email === '') {
        ElMessage.error({
            showClose:true,
            message:'邮箱格式不正确',
            type:'error',
            center:true,
            grouping:true
        })
        return false
    }
    if(formLabelAlign.password !== formLabelAlign.password2){
            ElMessage.error({
            showClose:true,
            message:'两次输入密码不一致',
            type:'error',
            center:true,
            grouping:true
        })
        return false
    }
    console.log(formLabelAlign);
    let res = await RegisterApi(formLabelAlign)
    console.log(res)
}

//清空
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<style>
.login-styel {
    border: 2px solid green;
    box-shadow: 2px 2px 10px green;
    border-radius: 10px;
}
</style>