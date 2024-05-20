import {createRouter,createWebHashHistory} from 'vue-router'


const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        // 主页 默认羽毛球拍页
        {
            name:'Index',
            path:'/:c?',
            component: ()=>import('@/view/Index.vue'),
            beforeEnter: (to, from, next) => {
                if (!to.params.c) {
                    // 如果参数 c 未定义，设置默认值
                    next({ name: 'Index', params: { c: 'rackets' } });
                } else {
                    next();
                }
            }
        }

    ]


})







export  default  router