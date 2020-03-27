import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'

const A =  ({ router }) => <Link href="#"><Comp>{router.query.id}</Comp></Link>

export default withRouter(A)