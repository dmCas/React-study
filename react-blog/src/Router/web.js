import loadable from '../utils(公共方法）/loadable'
import { HomeOutlined,EditOutlined, StarOutlined, TeamOutlined } from '@ant-design/icons';
const List = loadable(() => import('../pages/web/list/list'))
const Archive = loadable(() => import('../pages/web/archive'))
const Star = loadable(() => import('../pages/web/star'))
const About = loadable(() => import('../pages/web/about'))

const webRoutes = [
  {
    menu: true,
    icon: HomeOutlined,
    title: '首页',
    path: '/web/index',
    component: List
  },
  {
    menu: true,
    icon: EditOutlined,
    title: '归档',
    path: '/web/achieve',
    component: Archive
  },
  {
    menu: true,
    icon: StarOutlined,
    title: '收藏',
    path: '/web/star',
    component: Star
  },
  {
    menu: true,
    icon: StarOutlined,
    title: '关于',
    path: '/web/about',
    component: About
  }
]

export default webRoutes