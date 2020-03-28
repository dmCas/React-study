import { Select } from 'antd';
import React from 'react'
import axios from 'axios'
const { Option } = Select;
let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
      axios.get('/city/citys.json').then((res) => {
        var tem = []
        tem = res.data.citys.filter((item) => item.citysName.includes(value))
        // this.setState({
        //   showsearch: this.tem[0].citys.slice(0,15)
        // })
        console.log(tem.slice(0,10))
        callback(tem.slice(0,10))
      })
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    this.setState({ value }); 
  };

  render() {
    console.log(this.state.data)
    const options = this.state.data.map(d => <Option key={d.id}>{d.citysName}</Option>);
    return (
      <Select
        showSearch 
        value={this.state.value}
        placeholder='请输入城市名，快速查询天气信息'
        defaultActiveFirstOption='flase'
        showArrow='true'
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
        style={{ width: '100%' }}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput