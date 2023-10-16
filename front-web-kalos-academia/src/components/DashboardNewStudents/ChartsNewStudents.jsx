import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import './ChartsNewStudents.css'

const data = [
    {
        name: 'Junho',
        Alunos: 10,
        pv: 2000,
        amt: 2400,
    },
    {
        name: 'Julho',
        Alunos: 6,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Agosto',
        Alunos: 20,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Setembro',
        Alunos: 15,
        pv: 9800,
        amt: 2290,
    },

];

const ChartsNewStudents = () => {

    return (
        <LineChart className='dash_new_students' width={580} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Legend /> */}
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="Alunos" stroke="#000000" strokeWidth={3} />
        </LineChart>
    )
}

export default ChartsNewStudents