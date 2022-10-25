
import React from 'react'
import Card from '../Card/Card'
import { CardData } from "../../Data/Data";
import './Cards.css'
const Cards = () => {
  return (
    <div className="Cards">
        {CardData.map((card,id)=>{
            return(
                <div className="parentContainer">
                    <Card
                    title={card.title}
                    color={card.color}
                    barValues={card.barValue}
                    values={card.value}
                    png={card.png}
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards