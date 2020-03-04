import loadable from '../utils(公共方法）/loadable'

const Home = loadable(() => import('../pages/admin/home'))

const routes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/admin/page',
    component: Home
  }
]

export default routes