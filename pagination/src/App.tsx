import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Pagination } from "antd";
import { Button, Flex} from 'antd';
import { Space, Table, Tag } from 'antd';
import type { TableProps, TableColumnsType, TablePaginationConfig, GetProp } from 'antd';
import { SorterResult } from 'antd/es/table/interface'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { GetProps } from 'antd';


function App() {
  const [data, setData] = useState([])
  const [sortedInfo, setSortedInfo] = useState<Sorts>({})
  const [sortOrder, setSortOrder] = useState("asc")
  const [field, setField] = useState("firstName")
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [cnt, setCnt] = useState(0)

  type OnChange = NonNullable<TableProps<DataType>['onChange']>;
  // type Filters = Parameters<OnChange>[1];
  
  type GetSingle<T> = T extends (infer U)[] ? U : never;
  type Sorts = GetSingle<Parameters<OnChange>[2]>

  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;
  
  // const suffix = (
  //   <AudioOutlined
  //     style={{
  //       fontSize: 16,
  //       color: '#1677ff',
  //     }}
  //   />
  // );
  
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value)
    setSearch(value)
  };
  


  interface DataType {
    key: string;
    stockSymbol: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    language: string;

  }



  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Stock Symbol',
      dataIndex: 'stockSymbol',
      key: 'stockSymbol',
      // render: (text) => <a>{text}</a>,
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === 'stockSymbol' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === 'firstName' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === 'lastName' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === 'gender' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      sorter: (a, b) => a.language.length - b.language.length,
      sortOrder: sortedInfo.columnKey === 'language' ? sortedInfo.order : null,
      ellipsis: true
    },


  ];

  interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: SorterResult<any>['field'];
    sortOrder?: SorterResult<any>['order'];
    filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
  }

  const handleChange: OnChange = (pagination : any, filters, sorter:any ) => {
    console.log('Various parameters', pagination, sorter);
    // setFilteredInfo(filters);
    const data = sorter
    const page = pagination
    // console.log(data?.field, data?.order.substring(0,3) )
    // console.log(page.current)


    if(data?.order == "ascend") {
      setSortOrder("asc")
    }

    else if(data?.order == "descend") {
      setSortOrder("desc")
    }

    // setSortOrder(data?.order)
    setField(data?.field)
    setPage(page?.current)
    setSortedInfo(sorter as Sorts);
  }


  const clearAll = () => {
    // setFilteredInfo({});
    setSortedInfo({});
  };
  
  // const data: DataType[] = [
    // { 
    //   key: '1',
    //   stockSymbol: "NAO", 
    //   firstName: "Tallulah", 
    //   lastName: "Curee", 
    //   email: "tcuree1@storify.com", 
    //   gender: "Female", 
    //   language: "Bengali" 
    // },

    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    //   tags: ['nice', 'developer'],
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   tags: ['loser'],
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sydney No. 1 Lake Park',
    //   tags: ['cool', 'teacher'],
    // },
  // ];
  


  useEffect(() => {
    const fetchUser = async () => {
        try {
           const skip = (page-1) * 10
          //  const sort = sortOrder.substring(0,4)
          //  console.log(sort)
          console.log(skip)

          if(field) {
            const response = await axios.get(`http://localhost:8000/api/get-users-profile/${skip}?title=${field}&sortIn=${sortOrder}&input=${search}`, {
              // headers: { Authorization: `Bearer ${token}` },
              withCredentials: true,
              
          });

          console.log(response.data.data.count)
          setData(response.data.data.results)
          setCnt(response.data.data.count)
          }
          else {
            const response = await axios.get(`http://localhost:8000/api/get-users-profile/${skip}?title=firstName&input=${search}`, {
              // headers: { Authorization: `Bearer ${token}` },
              withCredentials: true,
          });
           console.log("hello...")
          setData(response.data.data.results)
          setCnt(response.data.data.count)
          }

          
            // setUser(response.data.data);
        } catch (err) {
            
        }
    };

    fetchUser();
}, [page,field,sortOrder,search]);




  return (
    <>

      <div>
       <h1>Pagination</h1>
      <Space style={{ marginBottom: 16 }}>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      
    />
        {/* <Button onClick={clearAll}>Clear sorters</Button> */}
      </Space>
      
      <Table<DataType> columns={columns} dataSource={data} 
      onChange={handleChange} pagination={{defaultCurrent:1, total:cnt}}/>
        {/* <Pagination defaultCurrent={1} total={50} /> */}

        {/* .filter((item) => {
        return search.toLowerCase() === ''
        ? item 
        : item.firstName.toLowerCase().includes(search)
      }) */}

      </div>
    </>
  )
}

export default App
