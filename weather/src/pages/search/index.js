import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { 
        SearchWrapper,
        Recommend,
        TagWrapper,
        Tag
       } from './style'
import axios from 'axios'
const { Search } = Input;



function SearchCity() {
  const [hotcity, sethotcity] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/city/hotcity.json')
      sethotcity(result.data.hotList)
    }
    fetchData()
  }, [])

  return (
    <SearchWrapper>
      <Search
        placeholder="请输入城市名，快速查询天气信息"
        onSearch={value => console.log(value)}
        style={{ width: '75%' }}
      />
      <Button>取消</Button>
      <Recommend>
        <p>热门城市</p>
        <Tag>
        {
          hotcity.map((item) => (
            <TagWrapper key={item}>{item}</TagWrapper>
          ))
        }
        </Tag>
      </Recommend>
    </SearchWrapper>
  )
}

export default withRouter(SearchCity)