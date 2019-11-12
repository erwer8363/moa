#react-router-dom
## 引入react-router-dom放到最外层根节点
- 放在根节点的作用:
  + 1 路由控制的范围,在整个项目中
  + 2 BrowserRouter说明采用的是history模式, HashRouter说明采用的是hash模式

#react-router-dom模块提供了那些组件
  + 1 BrowserRouter:路由模式采用的是history模式, HashRouter采用的是hash模式
  + 2 Switch: 里面只能使用Route和Redirect组件,是从上往下读, 只要有一个匹配成功,就不会往下读
  + 3 Route: 匹配路径,导入组件
      ### exact的类型为bool型, true表示严格匹配,false表示正常匹配
      ### render方法只有在路由匹配时才触发
      ### children方法不管路由匹不匹配都会触发
  + 4 Link: 编程式导航,link内部做了一个操作,把标签变成a标签
  + 5 NavLink: Link的特殊版本, 当匹配当前Url时,会给当前link添加样式.
      ### 例如 <NavLink to='/' activeClassName='active'>Home</NavLink>

#react-router-dom编程式导航
  ## this.props.history.push('/detail')
  ## this.props.history.push({})
  ## this.props.history.replace('/detail') // 替换当前页面
  ## this.props.history.goBack() // 返回上级页面的时候使用

# 子路由不能使用exact
 ## 因为exact表示精确匹配
 ## 子路由的路径必须依赖父路由,因此路径必须包含父组件的路由
 ## 如果父组件的路由是exact,则父组件没有办法匹配,则父组件没有办法渲染,则子组件就没有办法显示内容

# 动态路由
 ## 定义动态路由
 ```
 <Route exact path='/detail/:newsId' component={Detail}/>
 ```
 ## 获取路由的参数
 this.props.match.params.newsId