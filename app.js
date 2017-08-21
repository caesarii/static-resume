const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const session = require('cookie-session')

const { log } = require('./utils')
// const { secretKey } = require('./config')

// 引入路由文件
const index = require('./routes/index')
const admin = require('./routes/admin')
const interview = require('./routes/interview')


const app = express()
app.use(bodyParser.urlencoded({
    extended: true,
}))

// // 设置 session, 这里的 secretKey 是从 config.js 文件中拿到的
// app.use(session({
//     secret: secretKey,
// }))

// 配置 nunjucks 模板, 第一个参数是模板文件的路径
nunjucks.configure('templates', {
    autoescape: true,
    express: app,
    noCache: true,
})

// 配置静态资源文件
console.log(__dirname)
const asset = __dirname + '/static'
app.use('/static', express.static(asset))


app.use('/', index)
app.use('/admin', admin)
app.use('/interview', interview)

const run = (port=3000, host='') => {
    const server = app.listen(port, host, () => {
        // 非常熟悉的方法
        const address = server.address()
        host = address.address
        port = address.port
        log(`listening server at http://${host}:${port}`)
    })
}



if (require.main === module) {
    const port = 8008
    // host 参数指定为 '0.0.0.0' 可以让别的机器访问你的代码
    const host = '127.0.0.1'
    run(port, host)
}