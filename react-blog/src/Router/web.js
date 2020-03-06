import loadable from '../utils(公共方法）/loadable'
import { HomeOutlined } from '@ant-design/icons';
const List = loadable(() => import('../pages/web/list/list'))
const Archive = loadable(() => import('../pages/web/archive'))

const webRoutes = [
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '首页',
    path: '/web/index',
    component: List
  },
  {
    menu: true,
    icon: 'home',
    title: '归档',
    path: '/web/achieve',
    component: Archive
  },
  {
    menu: true,
    icon: 'home',
    title: '收藏',
    path: '/web/about',
    component: List
  },
  {
    menu: true,
    icon: 'home',
    title: '关于',
    path: '/web/about',
    component: List
  }
]

export default webRoutes