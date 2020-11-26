/**
 * 什么是中间层
 * * 就是前端请求--> nodejs--请求-ー--》后端ー-响应-> nodejs--数据处理---响应》前端。这么一个流程，这个流程的好处就是当业务逻辑过多，或者业务需求在不断变更的时候，前端不需要过多当去改变业务逻辑，与后端低耦合。前端即显示，渲染。后端获取和存储数据。中间层处理数据结构，返回给前端可用可渲染的数据结构。
 * * nodejs 是起中间层的作用，即根据客户端不同请求来做相应的处理或渲染页面，处理时可以是把获取的数据做简单的处理交由底层 java 那边做真正的数据持久化或数据更新，也可以是从底层获取数据做简单的处理返回给客户端。
 * * 通常我们把 Web 域分为客户端和服务端，也就是前端和后端，这里的后端就包含了网关，静态资源，接口，缓存，数据库等。而中间层呢，就是在后端这里再抽离一层出来，在业务上处理和客户端衔接更紧的部分，比如页面渲染（SSR），数据聚合，接口转发等等。
 * * 以 SSR 来说，在服务端将页面渲染好，可以加快用户的首屏加载速度，避免请求时白屏，还有利于网站做 SEO，他的好处是比较好理解的。
 */

/**
 * 中间层可以做的事情
 * 代理：在开发环境下，我们可以利用代理来，解決最常见的跨域问题；在线上环境下，我们可以利用代理，转发请求到多个服务端。
 * 缓存：缓存其实是更靠近前端的需求，用户的动作触发数据的更新，node 中间层可以直接处理一部分缓存需求。
 * 限流：node 中间层，可以针对接口或者路由做响应的限流。
 * 日志：相比其他服务端语言，node 中间层的日志记录，能更方便快捷的定位问题（是在浏览器端还是服务端）。
 * 监控：擅长高并发的请求处理，做监控也是合适的选项
 * 鉴权：有一个中间层去鉴权，也是一种单一职责的实
 * 路由：前端更需要掌握页面路由的权限和逻辑。
 * 服务端渲染：node 中间层的解决方案更灵活，比如 SSR、模板直出、利用一些 JS 库做预渲染等等。
 */
/**
 * node 转发API（node中间件）的优势
 * 可以在中间层把 javalphp 的数据，处理成对前端更友好的格式
 * 可以解决前端的跨域因为服务器端的请求是不涉及跨域的，跨域是浏览器的同源策酪导致的
 * 可以将多个请求在通过中间层合并，減少前端的请求
 */
/**
 * 如何做请求合并转发
 * 使用 express 中间件 multifetch 可以将请求批量合并
 * 使用 express+http-proxy-middleware 实现接口代理转发
 * 
 */
/**
 * 不使第三方模块手动实现一个node代理服务，实现请求合并问题
 * ** 实现思路 **
 * 搭建http 服务器，使用用node http 模块 createServer 方法
 * 接收客户端发送的请求，就是请求报文，请求报文中包括请求行，请求头，请求体
 * 将请求报文发送到目标服务器，使用http模块的request方法
 *  ** 代码实现 **
 */
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
  res.send('hello world')
})
server.listen(3000,()=>{
  console.log('running')
}