import { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'
import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.h1`
  color: yellow;
  font-size:40px;
`
const color = '#113366'

const A = ({ router, name }) => (
  <>
    <Title>This is title</Title>
    <Link href="#aaa">
      <a className="link">{router.query.id}{name}</a>
    </Link>

    <style jsx>{`
      a{
        color: blue
      }
      .link {
        color: ${color};
      }
    `}</style>
  </>
)

A.getInitialProps = async(ctx) => {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'wn'
      })
    }, 1000)
  })
  return await promise
}

export default withRouter(A)