import React from 'react'
import Image from 'next/image'
import './steps-card.scss'

interface StepsData {
    id: number;
    title: string;
    description: string;
}

interface StepsCardProps {
    data: StepsData;
}

const StepsCard = ({ data }: StepsCardProps) => {
    return (
        <div className="steps-card" key={data.id}>
            <h3 className='steps-card-title'>{data.title}</h3>
            <p className='steps-card-description'>{data.description}</p>
        </div>
    )
}

export default StepsCard