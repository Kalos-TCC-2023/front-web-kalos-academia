import React from 'react'
import './DashboardProductReservation.css'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Produtos',
    Recebidos: 15,
    Cancelados: 10,
    
  },
  
];

export const DashboardProductReservation = () => {
  return (
    <div className='dash_products'>
      <ComposedChart
          layout="vertical"
          width={590}
          height={150}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Recebidos" barSize={10} fill="#000" />
          <Bar dataKey="Cancelados" barSize={14} fill="#fff" />
        </ComposedChart>
    </div>
  )
}
