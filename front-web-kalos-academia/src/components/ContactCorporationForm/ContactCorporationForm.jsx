import React, { useEffect, useState } from 'react'
import { DescriptionForm } from '../DescriptionForm/DescriptionForm'
import { Input } from 'antd'
import './ContactCorporationForm.css'
import '../../components/TextField/TextField.css'
import axios from 'axios';


export const ContactCorporationForm = ({ data, updateFielHandler }) => {

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
  const [whatsapp, setWhatsapp] = useState('')

  console.log(data.razao_social)

  useEffect(() => {
    if (cep === '' || cep.length < 8) {
      console.log(cep)
      return
    } else {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({ data }) => {
          console.log(data)
          setRua(data.logradouro)
          setBairro(data.bairro)
          setCidade(data.localidade)
          console.log('data', data)
          updateFielHandler('bairro', data.bairro)
          updateFielHandler('rua', data.logradouro)
          updateFielHandler('cidade', data.localidade)
          updateFielHandler('logradouro', data.logradouro)


        }).catch((erro) => {
          console.log(erro)
        })
    }

  }, [cep])


  // useEffect(() => {
  //   if (data.facebook === '') {
  //     console.log('nao enviado')
  //   } else {
  //     console.log(data)
  //     axios.post('http://10.107.144.6:8080/kalos/academia', {
  //       nome: data.nome,
  //       email: data.email,
  //       senha: data.senha,
  //       telefone: data.telefone,
  //       cnpj: data.cnpj,
  //       foto: data.foto,
  //       descricao: data.descricao,
  //       cor_primaria: data.cor_primaria,
  //       cor_secundaria: data.cor_secundaria,
  //       data_abertura: '2022-07-02',
  //       razao_social: 'Empresa seria',
  //       facebook: data.facebook,
  //       whatsapp: data.whatsapp,
  //       instagram: data.instagram,
  //       logradouro: 'bluefit',
  //       numero: data.numero,
  //       bairro: 'bluefit',
  //       complemento: data.complemento,
  //       cep: data.cep,
  //       cidade: 'bluefit',
  //       estado: 'SP',
  //       id_categoria: 2,
  //       status: 'Ativo',
  //       tags: data.tags
  //     }
  //     ).then(({ data }) => {

  //       console.log(data)

  //     }).catch((erro) => {
  //       console.log(erro)
  //     })

  //   }


  // }, [facebook])


  return (
    <div className='contact_corporation_form animate__animated animate__fadeInRight'>

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
