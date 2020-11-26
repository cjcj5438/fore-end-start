// 接收客户端发送到代理服务起的请求报文
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
  let postbady = [];
  req.on('data',chunk=>{
    postbady.push(chunk)
  })
  req.on('end',()=>{
    let postbodyBuffer = Buffer.concat(postbody)
    res.end(postbodyBuffer)
  })

  res.send('hello world')
})
server.listen(3000,()=>{
  console.log('running')
})
/**
 * 这一步主要数据在客户端到服务器端进行传输时在 nodes 中需要用到 buffer。来处理处理过程就是将所有接收的数

个数组中，然后将其合并到一起还原出源数据。合并方法需要用到 buffer.concat，这里不能使用加号，加号会隐式的将 buffer 转化为字符串，这种转化不安全
 */