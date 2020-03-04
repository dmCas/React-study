import loadable from '../utils(公共方法）/loadable'

const About = loadable(() => import('../pages/web/about'))

const webRoutes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/web/about',
    component: About
  }
]