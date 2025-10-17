import React from 'react'
import Image from 'next/image'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import './info-card.scss'

interface InfoData {
    icon: string;
    title: string;
    description: string;
    link: string;
}

interface InfoCardProps {
    data: InfoData;
}

const InfoCard = ({ data }: InfoCardProps) => {
    return (
        <div className="info-card">
            <div className="info-card-image-wrapper">
                <Image src={data.icon} alt="info1" width={70} height={70} className='info-card-image' loading='lazy'  />
            </div>
            <h3 className='info-card-title'>{data.title}</h3>
            <p className='info-card-description'>{data.description}</p>
            <a href={data.link} className='info-card-link'>Read More<LiaLongArrowAltRightSolid className='arrow-icon' /></a>
        </div>
    )
}

export default InfoCard