import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'

const A =  ({ router, name }) => <Comp>{router.query.id}{name}</Comp>
// const A =  ({ router, name }) => <Link href="#aaa"><Comp>{router.query.id}{name}</Comp></Link>

A.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    // 一秒后路由跳转，只有数据请求到了才会进行路由跳转
    setTimeout(() => {
      resolve({
        name: 'wn'
      })
    }, 1000)
  })
  return await promise
}

export default withRouter(A)