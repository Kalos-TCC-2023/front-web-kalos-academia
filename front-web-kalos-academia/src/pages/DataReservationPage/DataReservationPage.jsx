import { Avatar, Breadcrumb, Button, Card, Steps, message } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, CheckCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './DataReservationPage.css'

export const DataReservationPage = () => {

  let { state } = useLocation()
  const [reservationData, setReservationData] = useState([])
  const [statusStep, setStatusStep] = useState(false)
  console.log(state)
  const endPointAzure = localStorage.getItem("end-point-azure")
  const [messageApi, contextHolder] = message.useMessage();
  const [attStatus, setAttStatus] = useState('')


  useEffect(() => {
    axios.get(`${endPointAzure}/kalos/reserva/id/${state.id_reserva}`)
      .then(({ data }) => {

        console.log((data));
        setReservationData(data.reserva)
        console.log(data.reserva.status_reserva)

        if (data.reserva.status_reserva == 'Cancelado') {
          setStatusStep(true)
        } else if (data.reserva.status_reserva == 'Recebido') {
          setStatusStep(true)
        }

      })
  }, [attStatus])

  const successCanceled = () => {
    messageApi.open({
      type: 'success',
      content: 'Reserva cancelada com sucesso!',
    });
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Reserva atualizada com sucesso!',
    });
  };
  const errorCanceled = () => {
    messageApi.open({
      type: 'error',
      content: 'Ops! Parece que tivemos um erro ao cancelar sua reserva!',
    });
  };

  const updateReservation = () => {
    console.log(reservationData.status_reserva);
    if(reservationData.status_reserva == 'Em-análise'){
      axios.put(`${endPointAzure}/kalos/reserva/id/${state.id_reserva}`, {

        quantidade: reservationData.quantidade,
        total: reservationData.total,
        id_produto: reservationData.id_produto,
        id_aluno: reservationData.id_aluno,
        id_status_reserva:4
  
      }).then(({ data }) => {
        console.log(data)
        setAttStatus(data.reserva.id)
        success()
      }).catch(({ error }) => {
        console.log(error)
        errorCanceled()
      })
    }else if(reservationData.status_reserva == 'Pronto-para-retirada'){
      axios.put(`${endPointAzure}/kalos/reserva/id/${state.id_reserva}`, {

        quantidade: reservationData.quantidade,
        total: reservationData.total,
        id_produto: reservationData.id_produto,
        id_aluno: reservationData.id_aluno,
        id_status_reserva: 1
  
      }).then(({ data }) => {
        console.log(data)
        setAttStatus(data.reserva.id + 1)
        success()
      }).catch(({ error }) => {
        console.log(error)
        errorCanceled()
      })
    } 
  }

  const canceladReservation = () => {
    axios.put(`${endPointAzure}/kalos/reserva/id/${state.id_reserva}`, {

      quantidade: reservationData.quantidade,
      total: reservationData.total,
      id_produto: reservationData.id_produto,
      id_aluno: reservationData.id_aluno,
      id_status_reserva: 2

    }).then(({ data }) => {
      console.log(data)
      setAttStatus(data.reserva.id)
      successCanceled()
    }).catch(({ error }) => {
      console.log(error)
      errorCanceled()
    })
  }

  return (
    <div className='data_reservation_product'>
      {contextHolder}

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
          {/* <div className="steps_reservation">
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
          </div> */}
          <div className="step_status">
            <div className={`status_reservation ${reservationData.status_reserva} blink`}></div>
            <p>{reservationData.status_reserva}</p>
          </div>
          <div className="options_reservations">
          <Button onClick={updateReservation} disabled={statusStep} shape=''>Atualizar status</Button>
          <Button onClick={updateReservation} disabled={statusStep} shape=''>Notificar Cliente</Button>
          </div>
          
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
                <Button disabled={statusStep} onClick={canceladReservation} type="dashed" danger>Cancelar Reserva</Button>
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
