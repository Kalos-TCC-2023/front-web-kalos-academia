import React from 'react'
import { Helmet } from 'react-helmet'
import { NoData } from '../../components/NoData/NoData'
import { ButtonPrimary } from './../../components/Button/ButtonPrimary'
import { MomentDate } from '../../components/MomentDate/MomentDate'
import { UserCard } from '../../components/UserCard/UserCard'
import { ReportDev } from '../../components/ReportDev/ReportDev'
import { CalenderHome } from '../../components/Calender/CalenderHome'
import './HomePage.css'


export const HomePage = () => {
    const contadorTreinos = 0
    const price = 592.99

    console.log(localStorage.getItem("id_academia"))

    

    return (
        <div className='home_page'>
            <Helmet>
                <title>Kalos - Home</title>
            </Helmet>

            <div className="home">

                <div className="items_home">
                    {/* FILEIRA UM */}
                    <div className="students_workouts_data">
                        <div className="workouts_counter">
                            <div className="items_workouts_counter">
                                <span className='title_home'>TREINOS</span>
                                <span className="description_home">A ACADEMIA POSSUI:</span>
                                <div className='counter_div'>
                                    <span className='counter'>{contadorTreinos}</span>
                                    <span className='number_description'>TREINOS</span>
                                </div>
                                <div className="create_workout">
                                    <ButtonPrimary className='create_new_workout' nameButton='CRIAR NOVO TREINO' />
                                </div>
                            </div>
                        </div>
                        <div className="recent_students">
                            <div className="header_recent_students">
                                <span className="title_recent_students">
                                    ALUNOS RECÉM-CHEGADOS
                                </span>
                                <div className="atual_day_format">
                                    <MomentDate formato='l' />
                                </div>
                            </div>
                            <div className="new_students">
                                <UserCard name={'Artur Alves'} id={'#10000'} />
                                <UserCard name={'Artur Alves'} id={'#10000'} />
                                <UserCard name={'Artur Alves'} id={'#10000'} />
                                <UserCard name={'Artur Alves'} id={'#10000'} />
                                <UserCard name={'Artur Alves'} id={'#10000'} />
                            </div>
                        </div>
                    </div>
                    {/* FILEIRA DOIS */}
                    <div className="new_students_products_weights_data">
                        <div className="new_students_dahsboard">
                            <div className="view_students">
                                <NoData description='Ainda não existem dados de novos estudantes' />
                                {/* <ButtonPrimary className='create_new_workout' nameButton='VISUALIZAR TODOS OS ALUNOS' /> */}
                            </div>
                        </div>
                        <div className="products">
                            <NoData description='Ainda não existem dados de novos produtos' />
                        </div>
                        <div className="weights">
                            <NoData description='Ainda não existem dados de pesos pegos' />
                        </div>
                    </div>
                </div>
                <div className="extras_items">
                    <CalenderHome />
                    <div className="data_products">
                        <div className="total_price_products">
                            <div className="value">
                                R${price}
                                <span className='total_description'>Lucro Total</span>
                            </div>
                            <span>Com sua loja on você lucrou</span>
                        </div>
                    </div>
                    <ReportDev />
                </div>
            </div>

        </div>
    )
}
