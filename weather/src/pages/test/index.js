import React from 'react'
import { Select } from 'antd';
import querystring from 'querystring';
import Axios from 'axios';

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
    Axios.get('/city/citylist.json').then((res) => {
      var showsearch = [], tem = []
      tem = res.data.provinces.filter((item) => item.provinceName == value)
      // this.setState({
      //   showsearch: this.tem[0].citys.slice(0,15)
      // })
      console.log(tem[0])
      showsearch = tem[0].citys
      callback(showsearch);
    })
    // Axios.get('/city/citylist.json')
    //   .then(response => response.json())
    //   .then(d => {
    //     if (currentValue === value) {
    //       const { result } = d;
    //       const data = [];
    //       result.forEach(r => {
    //         data.push({
    //           value: r[0],
    //           text: r[0],
    //         });
    //       });
    //       callback(data);
    //     }
    //   });
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
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        size='large'
        showArrow='false'
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent='Not Found'
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput