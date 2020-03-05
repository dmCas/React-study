import loadable from '../utils(公共方法）/loadable'

const List = loadable(() => import('../pages/web/list/list'))
// const About = loadable(() => import('../pages/web/about'))

const webRoutes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/web/index',
    component: List
  },
  // {
  //   menu: true,
  //   icon: 'home',
  //   title: '首页',
  //   path: '/web/about',
  //   component: About
  // }
]

export default webRoutes