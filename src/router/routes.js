const welcome = r =>require.ensure([],()=>r(require('@/components/welcome')),"welcome")
const animate = r =>require.ensure([],()=>r(require('@/components/animate')),"animate")
const index = r =>require.ensure([],()=>r(require('@/page/index')),"index")
const theme= r =>require.ensure([],()=>r(require('@/page/theme')),"theme")
const all = r =>require.ensure([],()=>r(require('@/page/all')),"all")
const good = r =>require.ensure([],()=>r(require('@/page/good')),"good")
const share = r =>require.ensure([],()=>r(require('@/page/share')),"share")
const job = r =>require.ensure([],()=>r(require('@/page/job')),"job")
const topics = r =>require.ensure([],()=>r(require('@/page/topics')),"topics")

const mine= r =>require.ensure([],()=>r(require('@/page/mine')),"mine")
const shoucang= r =>require.ensure([],()=>r(require('@/page/shoucang')),"shoucang")
const message= r =>require.ensure([],()=>r(require('@/page/message')),"mine")

const routes = [
    {
        path: '/',
        component: welcome
    },
    {
        path: '/index',
        redirect:'/index/theme',
        component: index,
        children:[
            {
                path :'theme',
                redirect:'theme/all',
                component:theme,
                children :[
                    {
                        path: 'all',
                        component: all
                    },
                    {
                        path: 'good',
                        component: good
                    },
                    {
                        path: 'job',
                        component: job
                    },
                    {
                        path: 'share',
                        component: share
                    }
                ]
            },
            {
                path :'shoucang',
                component : shoucang
            },
            {
                path :'mine',
                component : mine
            },
            {
                path :'message',
                component : message
            },
            {
                path : 'topics',
                component : topics
            }
        ]
    },
    {
        path :'/animate',
        component : animate
    }

]

export default routes