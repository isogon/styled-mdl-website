/* eslint-disable no-console */

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const redirects = [
  {
    from: '/',
    to: '/demos/badges',
  },
  {
    from: '/demos',
    to: '/demos/badges',
  },
]

app.prepare().then(() => {
  const server = express()

  redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.get('/demos/:demo', (req, res) => {
    app.render(req, res, '/demos', { demo: req.params.demo })
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
