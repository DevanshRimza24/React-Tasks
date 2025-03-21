import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { Pagination } from "antd";
import { Button, Flex } from "antd";
import { Space, Table, Tag } from "antd";
import type {
  TableProps,
  TableColumnsType,
  TablePaginationConfig,
  GetProp,
} from "antd";
import { SorterResult } from "antd/es/table/interface";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { GetProps } from "antd";
import { getData } from "./utils/functions";

function App() {
  const [data, setData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [sortOrder, setSortOrder] = useState("asc");
  const [field, setField] = useState("firstName");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [debounceSearch, setDebounceSearch] = useState("");
  const [cnt, setCnt] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
  // type Filters = Parameters<OnChange>[1];

  type GetSingle<T> = T extends (infer U)[] ? U : never;
  type Sorts = GetSingle<Parameters<OnChange>[2]>;

  // type SearchProps = GetProps<typeof Input.Search>;

  // const { Search } = Input;

  

  // const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
  //   console.log(info?.source, value, _e)
  //   setSearch(value)
  // };

  const searchChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {

    // const skip = (page - 1) * pageSize;

    setSearch(e.target.value)
    console.log("🚀 ~ App ~ e.target.value:", e.target.value)
    //  clearTimeout(typingTimeout)

  };

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("🚀 ~ setTimeout ~ search:", search)
      setDebounceSearch(search)

    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [search])

  const fetchUsers = async () => {
    console.log("cvdbdf")
    try {

      // if (field) {
       
        const response = await getData(page,pageSize,field,sortOrder,debounceSearch)
        // console.log(response.data)
        // const response = await axios.get(
        //   `http://localhost:8000/api/get-users-profile?page=${page}&pageSize=${pageSize}&title=${field}&sortIn=${sortOrder}&input=${debounceSearch}`,
        //   {
        //     withCredentials: true,
        //   }
        // );

        setData(response.data.data.results);
        setCnt(response.data.data.count);
      // } else {
      //   const response = await axios.get(
      //     `http://localhost:8000/api/get-users-profile/${page}?pageSize=${pageSize}&title=firstName&input=${debounceSearch}`,
      //     {
      //       withCredentials: true,
      //     }
      //   );

      //   setData(response.data.data.results);
      //   setCnt(response.data.data.count);
      // }

      // setUser(response.data.data);
    } catch (err) { }
  };

  useEffect(() => {
    console.log("first")
    fetchUsers();

  }, [debounceSearch, pageSize, sortOrder, field])

  interface DataType {
    key: string;
    stockSymbol: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    language: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Stock Symbol",
      dataIndex: "stockSymbol",
      key: "stockSymbol",
      // render: (text) => <a>{text}</a>,
      sorter: () => 0,
      sortOrder:
        sortedInfo.columnKey === "stockSymbol" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === "firstName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === "lastName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: () => 0,
      sortOrder: sortedInfo.columnKey === "gender" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
      sorter: (a, b) => a.language.length - b.language.length,
      sortOrder: sortedInfo.columnKey === "language" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: SorterResult<any>["field"];
    sortOrder?: SorterResult<any>["order"];
    filters?: Parameters<GetProp<TableProps, "onChange">>[1];
  }

  const handleChange: OnChange = (pagination: any, filters, sorter: any) => {
    console.log("Various parameters", pagination, sorter);
    // setFilteredInfo(filters);
    const data = sorter;
    const page = pagination;

    // console.log(data?.field, data?.order.substring(0,3) )
    console.log(page.pageSize);

    if (data?.order == "ascend") {
      setSortOrder("asc");
    } else if (data?.order == "descend") {
      setSortOrder("desc");
    }

    // setSortOrder(data?.order)
    setField(data?.field);
    setPage(page?.current);
    setPageSize(page.pageSize);
    setSortedInfo(sorter as Sorts);
  };

  // const clearAll = () => {

  //   setSortedInfo({});
  // };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const skip = (page - 1) * pageSize;
        
        // console.log(skip);

        

        // if (field) {

          
          const response = await getData(page,pageSize,field,sortOrder,search)


          // const response = await axios.get(
          //   `http://localhost:8000/api/get-users-profile?page=${page}&pageSize=${pageSize}&title=${field}&sortIn=${sortOrder}&input=${search}`,
          //   {
          //     // headers: { Authorization: `Bearer ${token}` },
          //     withCredentials: true,
          //   }
          // );

          console.log(response.data.data.count);
          setData(response.data.data.results);
          setCnt(response.data.data.count);
        // } else {
        //   const response = await axios.get(
        //     `http://localhost:8000/api/get-users-profile/${page}?pageSize=${pageSize}&title=firstName&input=${search}`,
        //     {
        //       // headers: { Authorization: `Bearer ${token}` },
        //       withCredentials: true,
        //     }
        //   );
        //   console.log("hello...");
        //   setData(response.data.data.results);
        //   setCnt(response.data.data.count);
        // }

        // setUser(response.data.data);
      } catch (err) { 

      }
    };

    fetchUser();
  }, [page, pageSize, field, sortOrder]);

  return (
    <>
      <div>
        <h1>Pagination</h1>

       

        {/* <label className='block font-medium mr-10'>Input</label> */}
        <input type="input" className="input" name="input" onChange={searchChange} />

        <Table<DataType>
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={{ defaultCurrent: 1, total: cnt }}
        />
       
      </div>
    </>
  );
}

export default App;
