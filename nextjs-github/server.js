// 启动一个后端服务
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  // 创建koa服务
  const server = new Koa()
  const router = new Router()

  // 路由映射
  router.get('/a/:id',  async (ctx) => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res,{
      pathname: '/a',
      query: {
        id
      }
    })
    ctx.respond = false
  })

  server.use(router.routes())
  // node一块的中间件...？
  // async await
  server.use(async (ctx, next) => { // 中间件就是一个函数
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})