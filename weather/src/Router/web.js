import loadable from '../utils/loadable'

const Home = loadable(() => import('../pages/main/main'))
const HomeRoute = {
    title: '首页',
    path: '/',
    component: Home
  }

export default HomeRoute