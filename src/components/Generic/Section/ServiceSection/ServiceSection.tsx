'use client'
import React from 'react'
import './service-section.scss'
import InfoCard from '../../Cards/InfoCard/InfoCard';
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle';
import { servicesData } from '@/data/myData';

const ServiceSection = () => {



    return (
        <section className='service-section' dir="ltr">
            <div className="container">
                <div className="service-wrapper">
                    <div className="section-text-wrapper">
                        <SectionTitle title="Our Services" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et." />
                        {/* <h2 className='section-title'>Our Services</h2>
                        <p className='section-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et.</p> */}
                    </div>

                    <div className="service-cards-wrapper">
                        {servicesData.map((service) => (
                            <InfoCard key={service.id} data={service} />
                        ))}
                    </div>
                </div>
            </div >
        </section >
    )
}

export default ServiceSection