import Router from 'koa-router'

let viewRouter = Router()

viewRouter
  .get('/react-side-nav', async function (ctx) {
    console.log(`get request for ${ctx.request.path}`)

    ctx.body = await ctx.render('index')
  })

export default viewRouter
