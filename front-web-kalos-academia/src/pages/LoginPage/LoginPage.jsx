import React from 'react'
import { Divider } from 'antd';
import './LoginPage.css'

export const LoginPage = () => {
    return (
        <div className='login_page'>
            <div className="login_container">
                <div className="login_fill">
                    <div className="login_salutation">
                        <p>SEJA BEM VINDO A KALOS!</p>
                        <p>Faça login e comece a administrar seu negocio fitness!</p>
                    </div>
                    <Divider />
                    <div className="login_fields">
                    </div>
                </div>
            </div>
            <div className="login_img_kalos_container"></div>
        </div>
    )
}
