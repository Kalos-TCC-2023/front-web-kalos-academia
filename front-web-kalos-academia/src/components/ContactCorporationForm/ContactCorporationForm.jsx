import React, { useEffect, useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd'
import apiCep from '../../adapters/api';

import './ContactCorporationForm.css'
import '../../components/TextField/TextField.css'
import axios from 'axios';


export const ContactCorporationForm = () => {

  const [telefone, setTelefone] = useState('')
  const [contatoEmail, setContatoEmail] = useState('')
  const [cep, setCep] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [rua, setRua] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')

  useEffect(() => {
    if (cep === '' || cep.length < 8) {
      return
    } else {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({ data }) => {
          setRua(data.logradouro)
          setBairro(data.bairro)
          setCidade(data.localidade)
          console.log(data)

        }).catch((erro) => {
          console.log(erro)
        })
    }

  }, [cep])

  return (
    <div className='contact_corporation_form animate__animated animate__fadeInRight'>

      <div className="contact_address">
        <DescriptionForm title='CONTATO E ENDEREÇO' description='Preencher dados de contato e endereço referente a sua academia' />
        <div className="contact">
          <div className='telephone'>
            <p className='textNameForInput'>Telefone</p>
            <Input size='default size' placeholder='00 0000-0000' value={telefone} onChange={telefone => setTelefone(telefone.target.value)} />
          </div>
          <div className='emailContact'>
            <p className='textNameForInput'>E-mail</p>
            <Input size='default size' placeholder='exemplo@gmail.com' value={contatoEmail} onChange={email => setContatoEmail(email.target.value)} />
          </div>
        </div>
        <div className="address">
          <div className="cep_complemento_bairro">
            <div className='cep'>
              <p className='textNameForInput'>CEP</p>
              <Input size='default size' placeholder='00000000' value={cep} onChange={cep => setCep(cep.target.value)} />
            </div>
            <div className='complemento'>
              <p className='textNameForInput'>Complemento</p>
              <Input size='default size' value={complemento} onChange={complemento => setComplemento(complemento.target.value)} />
            </div>
            <div className='bairro'>
              <p className='textNameForInput'>Bairro</p>
              <Input size='default size' disabled value={bairro} onChange={bairro => setBairro(bairro.target.value)} />
            </div>
          </div>
          <div className="rua_cidade_numero">
            <div className='rua'>
              <p className='textNameForInput'>Rua</p>
              <Input size='default size' disabled value={rua} onChange={rua => setRua(rua.target.value)} />
            </div>
            <div className='cidade'>
              <p className='textNameForInput'>Cidade</p>
              <Input size='default size' disabled value={cidade} onChange={cidade => setCidade(cidade.target.value)} />
            </div>
            <div className='numero'>
              <p className='textNameForInput'>Número</p>
              <Input size='default size' value={numero} onChange={numero => setNumero(numero.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="social_media">
        <DescriptionForm title='REDES SOCIAIS' description='Compartilhe suas redes sociais e integre seus posts!' />
        <div className="links_social_media">
          <div className='instagram'>
            <p className='textNameForInput'>Instagram</p>
            <Input size='default size' value={instagram} onChange={cep => setCep(cep.target.value)} />
          </div>
          <div className='facebook'>
            <p className='textNameForInput'>Facebook</p>
            <Input size='default size' value={facebook} onChange={cep => setCep(cep.target.value)} />
          </div>
        </div>
      </div>
    </div>
  )
}
