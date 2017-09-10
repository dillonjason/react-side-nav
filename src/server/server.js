import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import serve from 'koa-static'
import views from 'koa-render'
import mount from 'koa-mount'

import attachDevMiddleware from './middleware/dev'
import viewRouter from './routers/view'

let app = new Koa()

// Serve hot-reloading bundle to client
if (process.env.NODE_ENV === 'dev') {
  attachDevMiddleware(app)
}

app
  .use(bodyParser())
  .use(json())
  .use(mount('/plan', serve(`${process.cwd()}/dist`, {
    cacheControl: `max-age=${365 * 24 * 60 * 60}, immutable`
  })))
  .use(mount('/react-side-nav', serve(`${process.cwd()}/dist`)))
  .use(views(`${process.cwd()}/dist/assets/public/`, {
    map: {
      html: 'handlebars'
    }
  }))

app
  .use(viewRouter.routes())

app.listen(3000)

console.log(`Server listening at http://localhost:3000/react-side-nav`)
