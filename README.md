# moa
a mall
#React
####
##视图层框架
- 一个构建用户界面的框架
- 声明式的框架
- 数据驱动dom,再用事件反馈给数据(单向绑定)
- 组件化开发,用组合代替继承
- state&&props
- 生命周期
## 组件
- 纯组件 纯展示
- 容器式的组件 两种方式, 一种是使用props, 一种是使用children
## 生命周期
- constructor -> componentWillMount -> render -> componentDidMount
### 更新
- componentShouldUpdate -> componentWillUpdate -> render -> componentDidUpdate
## 销毁
- componentWillUnmount
