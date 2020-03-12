# styled-components
| yarn add styled-components
实现样式私有

# react-transition-group
| yarn add react-transition-group
引入模块 import { CssTransition } from 'react-transition-group'
<CSSTransition 
  timeout={200} 
  in={this.state.focused}
  classNames="slide"
>
  {/* slider-enter */}
  <NavSearch className={this.state.focused ? 'focused': ''}
  onFocus={this.handleInputFocus}
  onBlur = {this.handleInputBlur}></NavSearch>
</CSSTransition>

包裹需要使用动画效果的dom结构 再NavSearch被渲染之前 会添加slide这个类名 并再类名写样式