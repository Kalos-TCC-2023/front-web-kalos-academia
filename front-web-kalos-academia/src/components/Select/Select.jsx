import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectDefaultKalos = ({ defaultValue, options }) => (
  <Space wrap>
    <Select
      defaultValue={defaultValue}
      style={{
        width: 180,
      }}
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default SelectDefaultKalos;
