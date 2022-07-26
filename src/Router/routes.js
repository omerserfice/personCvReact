import { lazy } from "react";

const routes = [
   
    {
        path:'/ability',
        component:lazy(()=>import('../Pages/Ability'))
    },
    {
        path:'/experience',
        component:lazy(()=>import('../Pages/Experience'))
    },
    {
        path:'/about',
        component:lazy(()=>import('../Pages/About'))
    },
    {
        path:'/certificate',
        component:lazy(()=>import('../Pages/Certificate'))
    },
    {
        path:'/education',
        component:lazy(()=>import('../Pages/Education'))
    },
    {
        path:'/project',
        component:lazy(()=>import('../Pages/Project'))
    },
    {
        path:'/projectDetail/:id',
        component:lazy(()=>import('../Pages/ProjectDetail'))
    },
    {
        path:'/contact',
        component:lazy(()=>import('../Pages/Contact'))
    },
    {
        path:'/',
        component:lazy(()=>import('../Pages/About'))
    },
    
]
export default routes