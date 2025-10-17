'use client'
import React from 'react'
import Image from 'next/image'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Card } from 'react-bootstrap';
import ButtonComponent from '../../../Core/ButtonComponent';

interface InfoData1 {
    icon: string;
    title: string;
    description: string;
    link: string;
}

interface InfoCardProps1 {
    data: InfoData1;
}

const InfoCard1 = ({ data }: InfoCardProps1) => {
    return (
        <Card className='info-card'>
            {/* <Card.Img variant="top" src={data.icon} /> */}
            <Card.Body>
                <Card.Img as={Image} variant="top" src={data.icon} alt={data.title} width={64} height={64} className='info-card-icon' />
                <Card.Title className='info-card-title'>{data.title}</Card.Title>
                <Card.Text className='info-card-description'>
                    {data.description}
                </Card.Text>
                <ButtonComponent variant="custom" label='Read More' role='link' customClass='info-card-link' rightIcon={<LiaLongArrowAltRightSolid />} url={data.link} />
            </Card.Body>
        </Card>
    )
}

export default InfoCard1