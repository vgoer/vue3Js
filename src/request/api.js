// 接口

import instance from './request'


// 自定义接口

// 注册接口
export const RegisterApi = (params) => instance.post('/regApi',params);


