import React from 'react'
import { Input, Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { 
        SearchWrapper,
        Recommend,
        TagWrapper,
        Tag,
        His
       } from './style'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actionCreators  from '../../store/actionCreators'
import { Link } from 'react-router-dom'
const { Search } = Input;

class SearchCity extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hotcity: []
    }
  }

  componentDidMount(){
    const fetchData = async () => {
      const result = await axios('/city/hotcity.json')
      // sethotcity(result.data.hotList)
      this.setState({
        hotcity: result.data.hotList
      })
    }
    fetchData()
  }
  render(){
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
            this.state.hotcity.map((item) => (
              <Link key={item} to='/'>
                <TagWrapper  onClick={() => this.props.changeCity(item)}>{item}市</TagWrapper>
              </Link>
            ))
          }
          </Tag>
        </Recommend>
        <Recommend>
          <p>历史记录</p>
          <His>
          {
            this.props.cityHistory.map((item) => (
              <Link key={item} to='/'>
                <TagWrapper  onClick={() => this.props.changeCity(item)}>{item}市</TagWrapper>
              </Link>
            ))
          }
          </His>
        </Recommend>
      </SearchWrapper>
    )
  }
}


// function SearchCity() {
//   const [hotcity, sethotcity] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('/city/hotcity.json')
//       sethotcity(result.data.hotList)
//     }
//     fetchData()
//   }, [])

//   return (
//     <SearchWrapper>
//       <Search
//         placeholder="请输入城市名，快速查询天气信息"
//         onSearch={value => console.log(value)}
//         style={{ width: '75%' }}
//       />
//       <Button>取消</Button>
//       <Recommend>
//         <p>热门城市</p>
//         <Tag>
//         {
//           hotcity.map((item) => (
//             <TagWrapper key={item} onClick={() => console.log(item)}>{item}</TagWrapper>
//           ))
//         }
//         </Tag>
//       </Recommend>
//     </SearchWrapper>
//   )
// }


const mapState= (state) => ({
  city: state.get('city'),
  cityHistory: state.get('cityHistory')
})


const mapDispatch = (dispatch) => ({
  changeCity(city){
    dispatch(actionCreators.changeCity(city))
  }
})

export default connect(mapState, mapDispatch)(withRouter(SearchCity))