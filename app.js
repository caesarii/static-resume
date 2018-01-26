
const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const session = require('cookie-session')

const { log } = require('./utils')


// 引入路由文件
const index = require('./routes/index')



const app = express()
app.use(bodyParser.urlencoded({
    extended: true,
}))

//  nunjucks 模板
nunjucks.configure('engines', {
    autoescape: true,
    express: app,
    noCache: true,
})

// 静态资源文件
const asset = __dirname + '/static'
app.use('/static', express.static(asset))


app.use('/', index)


const run = (port=3000, host='') => {

    const server = app.listen(port, host, () => {
        const address = server.address()
        host = address.address
        port = address.port
        log(`listening server at http://${host}:${port}`)
    })
}

if (require.main === module) {
    const port = 8008
    const host = '127.0.0.1'
    run(port, host)
}

