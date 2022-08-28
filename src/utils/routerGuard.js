import router from "@/router";
import storage from '@/utils/storage'
router.beforeEach((to,from,next)=>{
    //! to 目标路由
    //! from 源路由对象
    //! next是这个函数，调用之后，可以理解为放行
    let token = storage.get('token')
    if(token){
        ////已经登录 =>放行
        next()
    }else{
        ////没有登录
        ////=>访问的是登录页
        ////=>访问的不是登录页
        if(to.path === '/login'){
            next()
        }else{
            next({path:'/login'})
        }
       
    }
    
})

export default router