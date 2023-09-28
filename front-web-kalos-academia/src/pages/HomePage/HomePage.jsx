import React from 'react'
import { Helmet } from 'react-helmet'
import { ButtonPrimary } from './../../components/Button/ButtonPrimary'
import { MomentDate } from '../../components/MomentDate/MomentDate'
import './HomePage.css'
import { UserCard } from '../../components/UserCard/UserCard'

export const HomePage = () => {

    const contadorTreinos = 0


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
                                <UserCard />
                            </div>
                        </div>
                    </div>
                    {/* FILEIRA DOIS */}
                    <div className="new_students_products_weights_data">
                        <div className="new_students_dahsboard">
                           
                        </div>
                        <div className="products">

                        </div>
                        <div className="weights">

                        </div>
                    </div>
                </div>
                <div className="extras_items">
                    Extras
                </div>
            </div>

        </div>
    )
}
