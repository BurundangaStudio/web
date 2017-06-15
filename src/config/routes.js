//
// routes.js

import App from './../App'

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: '/home',
                component: (resolve) => {
                    require(['./../components/home/Home.vue'], resolve)
                }
            },
            {
                path: '/about',
                component: (resolve) => {
                    require(['./../components/about/About.vue'], resolve)
                }
            }
        ]
    }
]

export default routes
