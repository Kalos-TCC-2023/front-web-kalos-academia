import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd'
import { message } from 'antd';
import './ContactCorporationForm.css'
import '../../components/TextField/TextField.css'
import axios from 'axios';


export const ContactCorporationForm = ({ data, updateFielHandler, submit, stateSubmit, operationCorporation, updateOperationHandler }) => {

  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [rua, setRua] = useState('')
  const [cidade, setCidade] = useState('')
  const [idAcademia, setIdAcademia] = useState('')
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const errorMessage = () => {
    messageApi.open({
      type: 'error',
      content: 'Existem campos vazios, verifique o formulario',
    })
  }

  console.log(data)

  const errorServer = () => {
    messageApi.open({
      type: 'error',
      content: 'Ops! Parece que houve um erro inesperado!',
    })
  }

  useEffect(() => {
    if (cep === '' || cep.length < 8) {
      console.log(cep)
      return
    } else {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({ data }) => {
          setRua(data.logradouro)
          setBairro(data.bairro)
          setCidade(data.localidade)
          updateFielHandler('bairro', data.bairro)
          updateFielHandler('rua', data.logradouro)
          updateFielHandler('cidade', data.localidade)
          updateFielHandler('logradouro', data.logradouro)
          updateFielHandler('estado', data.uf)
        }).catch((erro) => {
          console.log(erro)
        })
    }
  }, [cep])

  useEffect(() => {
    if (submit === true) {
      if (data.nome == '', data.email == '', data.senha == '', 
      data.telefone == '', data.cnpj == '', data.foto == '', 
      data.descricao == '', data.cor_primaria == '', data.cor_primaria == '', 
      data.data_abertura == '',data.razao_social == '', data.facebook == '', 
      data.whatsapp == '', data.instagram == '', data.logradouro == '', 
      data.numero == '',  data.bairro == '', data.complemento == '', data.cep == '', 
      data.cidade == '', data.estado == '', data.id_categoria == '', data.status == '', data.tags == []) {
        
        errorMessage()
        stateSubmit(false)
      } else {

        // http://10.107.144.6:8080
        axios.post('http://10.107.144.6:8080/kalos/academia', {
          nome: data.nome,
          email: data.email,
          senha: data.senha,
          telefone: data.telefone,
          cnpj: data.cnpj,
          foto: data.foto,
          descricao: data.descricao,
          cor_primaria: data.cor_primaria,
          cor_secundaria: data.cor_secundaria,
          data_abertura: data.data_abertura,
          razao_social: data.razao_social,
          facebook: data.facebook,
          whatsapp: data.whatsapp,
          instagram: data.instagram,
          logradouro: data.logradouro,
          numero: data.numero,
          bairro: data.bairro,
          complemento: data.complemento,
          cep: data.cep,
          cidade: data.cidade,
          estado: data.estado,
          id_categoria: data.id_categoria,
          status: data.status,
          tags: data.tags
        }
        ).then(({ data }) => {

          setIdAcademia(data.academia[0]['id'])
          updateOperationHandler('id_academia', idAcademia)
          stateSubmit(false)

        }).catch((erro) => {
          errorServer()
          
        })
      }
    }
  }, [submit])

  useEffect(() => {
    if (idAcademia !== '') {
      axios.post('https://kaloscorp.cyclic.cloud/kalos/funcionamento', {
        id_academia: idAcademia,
        segunda: {
          status: operationCorporation.segunda['status'],
          horario_inicio: operationCorporation.segunda['horario_inicio'],
          horario_fim: operationCorporation.segunda['horario_fim']
        },
        terca: {
          status: operationCorporation.terca['status'],
          horario_inicio: operationCorporation.terca['horario_inicio'],
          horario_fim: operationCorporation.terca['horario_fim']
        },
        quarta: {
          status: operationCorporation.quarta['status'],
          horario_inicio: operationCorporation.quarta['horario_inicio'],
          horario_fim: operationCorporation.quarta['horario_fim']
        },
        quinta: {
          status: operationCorporation.quinta['status'],
          horario_inicio: operationCorporation.quinta['horario_inicio'],
          horario_fim: operationCorporation.quinta['horario_fim']
        },
        sexta: {
          status: operationCorporation.sexta['status'],
          horario_inicio: operationCorporation.sexta['horario_inicio'],
          horario_fim: operationCorporation.sexta['horario_fim']
        },
        sabado: {
          status: operationCorporation.sabado['status'],
          horario_inicio: operationCorporation.sabado['horario_inicio'],
          horario_fim: operationCorporation.sabado['horario_fim']
        },
        domingo: {
          status: operationCorporation.domingo['status'],
          horario_inicio: operationCorporation.domingo['horario_inicio'],
          horario_fim: operationCorporation.domingo['horario_fim']
        }
      }).then(({ data }) => {
        if(data.status == 201){
          navigate("/sucesso")
        } else {
          errorServer()
        }
        console.log(data)
      }).catch((erro) => {
        errorServer()
      })

    }

  }, [idAcademia])


  return (
    <div className='contact_corporation_form animate__animated animate__fadeInRight'>
      {contextHolder}
      <div className="contact_address">
        <DescriptionForm title='CONTATO E ENDEREÇO' description='Preencher dados de contato e endereço referente a sua academia' />
        <div className="contact">
          <div className='telephone'>
            <p className='textNameForInput'>Telefone</p>
            <Input size='default size' placeholder='00 0000-0000' value={data.telefone} onChange={telefone => updateFielHandler('telefone', telefone.target.value)} />
          </div>
          <div className='emailContact'>
            <p className='textNameForInput'>E-mail</p>
            <Input size='default size' placeholder='exemplo@gmail.com' value={data.email} onChange={email => updateFielHandler(email.target.value)} />
          </div>
        </div>
        <div className="address">
          <div className="cep_complemento_bairro">
            <div className='cep'>
              <p className='textNameForInput'>CEP</p>
              <Input size='default size' placeholder='00000000' value={data.cep} onChange={(cep) => {
                setCep(cep.target.value)
                updateFielHandler('cep', cep.target.value)
              }
              } />
            </div>
            <div className='complemento'>
              <p className='textNameForInput'>Complemento</p>
              <Input size='default size' value={data.complemento} onChange={complemento => updateFielHandler('complemento', complemento.target.value)} />
            </div>
            <div className='bairro'>
              <p className='textNameForInput'>Bairro</p>
              <Input size='default size' disabled value={data.bairro} onChange={bairro => setBairro(bairro.target.value)} />
            </div>
          </div>
          <div className="rua_cidade_numero">
            <div className='rua'>
              <p className='textNameForInput'>Rua</p>
              <Input size='default size' disabled value={data.logradouro} onChange={rua => setRua(rua.target.value)} />
            </div>
            <div className='cidade'>
              <p className='textNameForInput'>Cidade</p>
              <Input size='default size' disabled value={data.cidade} onChange={cidade => setCidade(cidade.target.value)} />
            </div>
            <div className='numero'>
              <p className='textNameForInput'>Número</p>
              <Input size='default size' value={data.numero} onChange={numero => updateFielHandler('numero', numero.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="social_media">
        <DescriptionForm title='REDES SOCIAIS' description='Compartilhe suas redes sociais e integre seus posts!' />
        <div className="links_social_media">
          <div className='instagram'>
            <p className='textNameForInput'>Instagram</p>
            <Input size='default size' value={data.instagram} onChange={instagram => updateFielHandler('instagram', instagram.target.value)} />
          </div>
          <div className='facebook'>
            <p className='textNameForInput'>Facebook</p>
            <Input size='default size' value={data.facebook} onChange={facebook => updateFielHandler('facebook', facebook.target.value)} />
          </div>
          <div className='WhatsApp'>
            <p className='textNameForInput'>Whastapp</p>
            <Input size='default size' value={data.whatsapp} onChange={whatsapp => updateFielHandler('whatsapp', whatsapp.target.value)} />
          </div>
        </div>
      </div>
    </div>
  )
}
