import React from 'react'
import Image from 'next/image'
import { strategyData } from '@/data/myData'
import StepsCard from '../../Cards/StepsCard/StepsCard';
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle';
import './our-strategy.scss'
import strategyImage from "../../../../../public/images/our-strategy.png"

const OurStrategy = () => {
    // console.log(strategyData);
    return (
        <section className='our-strategy-section'>
            <div className="container">
                <div className="our-strategy-wrapper">
                    <div className="our-strategy-top-content">
                        <SectionTitle title="Your idea into reality" description="We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget." />
                        {/* <h2 className='section-title'>Your idea into <span className='primary-color'>reality</span></h2>
                        <p className='section-description'>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p> */}
                    </div>

                    <div className="our-strategy-bottom-content">
                        {strategyData.map((item) => (
                            // <StepsCard key={item.id} data={item} />
                            <div className="steps-card" key={item.id}>
                                <div className="steps-card-left">
                                    <div className="steps-card-number">
                                        <span >{item.id}</span>
                                    </div>
                                </div>
                                <div className="steps-card-right">
                                    <h3 className='steps-card-title'>{item.title}</h3>
                                    <p className='steps-card-description'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Image */}
                    {strategyImage && (
                    <Image src={strategyImage} alt="Background Design" width={700} height={700} className='our-strategy-image' loading='lazy'  />
                )}

            </div>
        </section>

    )
}

export default OurStrategy