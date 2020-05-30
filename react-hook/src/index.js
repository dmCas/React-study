import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import Demo from './component/treeSelect'
import Demo1 from './component/useState/indexHook'
import Demo2 from './component/useEffect/indexHook'
import Demo7 from './component/useEffect'
import Demo3 from './component/useContext'
import Demo4 from './component/useContext/indexHook'
import Demo5 from './component/useEffect/Debounce'
import Demo6 from './component/useEffect/CountriesChart'
import Example1 from './component/demo/demo1'
import Reducer from './component/useReducer/index'
import MakeUnmount from './component/useEffect/makeUnmount'
import Memo from './component/useMemo'
import * as serviceWorker from './serviceWorker';

import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

ReactDOM.render(<Memo />, document.getElementById('root'));
// ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));
serviceWorker.unregister();
