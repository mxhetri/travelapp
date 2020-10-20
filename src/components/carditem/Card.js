import React from "react";
import CardItem from "./CardItem";
import './cards.css'
function Card() {

    return(
        <div className='cards'>
            <h1>Check out these exortic destination!</h1>
            <div className='cards__wrapper'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                       <CardItem
                           src='images/img-1.jpg'
                           text='Explore the hidden waterfall deep inside western Europe'
                           label='adventure'
                           path='/services'
                       />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Explore the hidden waterfall deep inside western Europe'
                            label='Luxery'
                            path='/services'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-4.jpg'
                            text='Explore the hidden waterfall deep inside western Europe'
                            label='Exortic'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Explore the hidden waterfall deep inside western Europe'
                            label='adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-6.jpg'
                            text='Explore the hidden waterfall deep inside western Europe'
                            label='adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;