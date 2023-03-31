import React from 'react'
import '../style/card.css'

export default function Card(props) {
    return (
    <div className='cardDiv'>
        <h1 className='cardNum'>{props.num}</h1>
    </div>
    )
}
