// 启动一个后端服务
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

// app.prepare().then(() => {
  // 创建koa服务
  const server = new Koa()
  const router = new Router()

  router.get('/test/:id', (ctx) => {
    // ctx.body = `<p>request /test ${ctx.params.id}</p>`
    ctx.body = { success: true }
    ctx.set('Content-Type', 'application/js')
  })

  server.use(async (ctx, next) => {
    // const path = ctx.path
    // const method = ctx.method
    // ctx.body= `<span>Koa Render ${method} ${path}</span>`
    await next()
  })
  // server.use(async (ctx, next) => {
  //   ctx.body= '<span>Koa Render2</span>'
  // })
  // node一块的中间件...？
  // async await
  // server.use(async (ctx, next) => { // 中间件就是一个函数
  //   await handle(ctx.req, ctx.res)
  //   ctx.respond = false
  // })
  //router.routes()中间件
  server.use(router.routes())

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
// })