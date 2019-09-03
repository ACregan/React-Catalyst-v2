/* eslint-disable no-console */
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import config from '../../webpack.config.dev.js'
import open from 'open'

// DEV-SERVER.JS
// This enables dev server on localhost over network

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: { colors: true },
  })
)

app.use(
  require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
  })
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
