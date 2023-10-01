import React from 'react'
import './Calender.css'
import { Calendar, theme } from 'antd'

import dayjs from 'dayjs'
import enUS from 'antd/locale/pt_BR';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const onPanelChange = (value, mode) => {
    console.log(value.format('DD-MM-YYYY'), mode);
}

export const CalenderHome = () => {
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    }
    return (
        <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    )
}
