import Image from 'next/image'
import React from 'react'
import './schedule-session.scss'

const ScheduleSession = () => {
    return (
        <section className="section schedule-section">
            <div className="container">
                <div className="schedule-wrapper">

                    <div className="schedule-content">
                        <h2 className="section-title">Establishing online presence</h2>
                        <p className="section-description">
                            Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting
                            visitors into users. At first glance, the site should encourage and guide visitors in a
                            smooth way towards call-to-actions.
                        </p>
                        <p className="section-description">
                            This goes hand in hand with a responsive design, meaning it needs to be apt for different
                            devices.
                        </p>
                        <p className="section-description">
                            We use a data-driven approach to measure user response when developing the site. This method
                            usually makes the site quicker to launch, is more cost-effective and more successful in the
                            long run.
                        </p>
                        <p className="section-description">
                            The pages need to be search engine optimized (SEO) because it lays the foundation for the
                            technical quality, which in turn determines how high it will rank among search results. We
                            also make sure that your website is indexed properly.
                        </p>
                        <p className="section-description">
                            We audit your audience and get to know your target market to be able to speak to them
                            through the website in the best possible way. By finding out their consumer behavior we can
                            refine the website approach.
                        </p>
                    </div>

                    <div className="schedule-body">
                        <p className="schedule-heading">Schedule a free session</p>
                        <div className="schedule-image-wrapper">
                            <Image
                                src="/images/schedule.png"
                                alt="Schedule Meeting"
                                className="schedule-image"
                                width={600}
                                height={500}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                <div className="background-decoration">
                    <Image
                        src="/images/full-design-element.png"
                        alt="Background Design Element"
                        className="decoration-image"
                        width={600}
                        height={600}
                        loading='lazy'
                    />
                </div>
            </div>
        </section>
    )
}

export default ScheduleSession