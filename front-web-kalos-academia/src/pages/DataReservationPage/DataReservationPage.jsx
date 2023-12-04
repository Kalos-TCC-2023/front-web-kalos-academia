import { Avatar, Breadcrumb, Button, Card, Steps } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, CheckCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './DataReservationPage.css'

export const DataReservationPage = () => {

  let { state } = useLocation()
  const [reservationData, setReservationData] = useState([])
  const [statusStep, setStatusStep] = useState('')
  console.log(state)

  useEffect(() => {
    axios.get(`https://kaloscorp.cyclic.app/kalos/reserva/id/${state.id_reserva}`)
      .then(({ data }) => {

        console.log((data));
        setReservationData(data.reserva)

      })
  }, [])

  return (
    <div className='data_reservation_product'>
      <div className="reservation_product">
        <div className="raiz_title">
          <h1 className='title_edit_page'>Dados da reserva</h1>
          <Breadcrumb
            items={[
              {
                title: <Link to='/menu/produtos/reservas'>Loja - Reservas</Link>,
              },
              {
                title: <Link to='/menu/produtos/reservas/reserva'>Dados da reserva {state.id_reserva}</Link>,
              },

            ]}
          />
        </div>
        <div className="reservation_data">
          <div className="steps_reservation">
            <Steps className='ant-steps-item-title'
              items={[
                {
                  title: 'Em análise',
                  status: 'finish',
                  icon: <SolutionOutlined />,
                },
                {
                  title: 'Pronto para retirada',
                  status: 'finish',
                  icon: <CheckCircleOutlined />,
                },
                {
                  title: 'Recebido',
                  status: 'finish',
                  icon: <SmileOutlined />,
                },
              ]}
            />
          </div>
          <Button shape=''>Atualizar status</Button>

          <div className="informations_product_reservation">

            <div className="status_information_reservation">

              <Card
                title="Informações Gerais da Reserva"
                style={{
                  width: 400,
                }}
              >
                <p> <span className='title_product_data'>Codigo da reserva:</span> {reservationData.codigo}</p>
                <p> <span className='title_product_data'>Data do pedido:</span> {reservationData.data}</p>
                <p> <span className='title_product_data'>Nome do produto:</span> {reservationData.nome_produto}</p>
                <p> <span className='title_product_data'>Quantidade:</span> {reservationData.quantidade}</p>
                <p> <span className='title_product_data'>Valor Total:</span> R${reservationData.total}</p>
                <br />
                <Button type="dashed" danger>Cancelar Reserva</Button>
              </Card>
            </div>
            <div className="information_client_reservation">
              <Card
                title="Dados do Cliente"
                style={{
                  width: 400,
                }}
              >
                <Avatar size={144} src={reservationData.foto_aluno} />
                <p><span className='title_product_data'>Nome do aluno:</span> {reservationData.nome_aluno}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
