/**
 * 使用 http 模块 的request 方法，将请求报文发送到目标服务器
 * ** 第二部已经得到客户端上传的数据， 但是缺少请求头， 所以在这一步根据客户端发送的请求 需要构建请求头， 然后发送
 */

const http = require('http')
const { report } = require('process')
const server = http.createServer()
server.on('request',(req,res)=>{
  var {connection,host,...originHeaders} = req.headers
  var options = {
    "method": req.method,
    "hostname":"www.nanjian.com",
    "port":"80",
    "path":req.url,
    "headers":{originHeaders}
  }
  var p = new Promise((resolve,reject)=>{
    let postbody = []
    req.on("data",chunk =>{
      postbody.push(chunk)
    })
    req.on("end", ()=>{
      let postbodyBuffer = Buffer.concat(postbody)
      resolve(postbodyBuffer)
    })
  })
  p.then(postbodyBuffer=>{
    let responsebody =[]
    var request= http.request(options,(response)=>{
      response.on("data", (chunk)=>{
        responsebody.push(chunk)
      })
      response.on("end", ()=>{
        responsebodyBuffer= Buffer.concat(responsebody)
        res.end(responsebodyBuffer)
      })
    })
    request.write(postbodyBuffer)
    request.end()
  })
})
server.listen(3000,()=>{
  console.log('running :>> ', running);
})