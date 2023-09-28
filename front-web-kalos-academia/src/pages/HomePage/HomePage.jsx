import React from 'react'
import { Helmet } from 'react-helmet'
import './HomePage.css'

export const HomePage = () => {
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

                        </div>
                        <div className="recent_students">

                        </div>
                    </div>
                    {/* FILEIRA DOIS */}
                    <div className="new_students_products_weights_data">
                        <div className="new_students">

                        </div>
                        <div className="products">

                        </div>
                        <div className="weights">

                        </div>
                    </div>
                </div>
                {/* <div className="extras_items">
                    aaa
                </div> */}
            </div>

        </div>
    )
}
