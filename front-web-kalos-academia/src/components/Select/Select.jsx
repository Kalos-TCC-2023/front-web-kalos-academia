import React from 'react';
import { Select, Space } from 'antd';



const SelectDefaultKalos = ({ defaultValue, options, width, height, handleChange }) => (
  <Space wrap>
    <Select
      defaultValue={defaultValue}
      style={{
        width: width,
        height: height
      }}
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default SelectDefaultKalos;
