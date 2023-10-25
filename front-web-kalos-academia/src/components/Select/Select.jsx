import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectDefaultKalos = ({ defaultValue, options, width, height }) => (
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
