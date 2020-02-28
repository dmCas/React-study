// 拥有form表单的布局与提交功能
// formItem 收集错误信息
// Input 输入框前增加Icon
// 提供input 输入框控件提示事件处理 -> 表单校验
import React, { Component } from 'react';
import { Icon } from 'antd'
// import FormItem from 'antd/lib/form/FormItem';


// hoc： 包装用户单位，增加数据管理和校验
function KFormCreate(Comp) {
  return class NewComp extends Component {
    constructor(props) {
      super(props)

      this.options = {} // 字段选项设置
      this.state = {} // 字段值
    }

    // 处理表单输入事件
    handleChange = e => {
      const {name,value} = e.target
      this.setState(
        {
          [name]: value
        },
        () => {
          // 数据变化后再校验
          this.validateField(name)
        }
      )
    }

    // 表单校验
    validateField = field => {
      const rules = this.options[field].rules
      // 只要任何一项失败就失败
      const ret = rules.some(rule => {
        if (rule.required) {
          // 仅验证必填项
          if (!this.state[field]) {
            // 校验失败
            this.setState({
              [field+ "Message"]: rule.message
            })
            return true
          }
        }
      })
      if(!ret) {
        //没失败
        this.setState({ [field + "Message"]: "" });
      }
      return !ret;
    }
    
  }
}

class FormItem extends Component {
  render () {
    return (
      <div className="formItem">
        {/* {this.props.children} */}
        {this.props.validateStatus === "error" && (
          <p style={{color: 'red'}}>{this.props.help}</p>
        )}
      </div>
    )
  }
}

class KInput extends Component {
  render () {
    return (
      <div>
        {this.props.prefix}
        <input {...this.props} />
      </div>
    )
  }
}

@KFormCreate
class KFormSample extends Component {
  onSubmit = () => {
    this.props.validate(isvalid => {
      if (isValid) {
        console.log('校验成功, 提交登录', this.props.value)
      }
      else {
        console.log('校验失败')
      }
    })
  }
  render() {
    const {getFieldDec, isFieldTouched, getFieldError} = this.props
    const uerNameError = isFieldTouched('uname') && getFieldError('uname')
    const passwordError = isFieldTouched('pwd') && getFieldError('pwd')
    
    return (
      <div>
        <FormItem 
        validateStatus={uerNameError ? "error" : ''}
        help={uerNameError || ''}>
          
          {getFieldDec('uname', {
            rules:[{required: true, message: '请填写用户名'}]
            },
            <KInput type='text' prefix={<Icon type="user"/>}></KInput>
          )}

        </FormItem>
        <FormItem 
        validateStatus={passwordError ? "error" : ''}
        help={passwordError || ''}>
          
          {getFieldDec('pwd', {
            rules:[{required: true, message: '请填写密码'}]
            },
            <KInput type='text' prefix={<Icon type="lock"/>}></KInput>
          )}
        </FormItem>
        <button onClick={() => this.onSubmit}>登录</button>
      </div>
    );
  }
}

export default KFormSample;