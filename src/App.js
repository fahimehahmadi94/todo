import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function App() {
  return (
    <>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    <br></br>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    </>
  );
}

export default App;
