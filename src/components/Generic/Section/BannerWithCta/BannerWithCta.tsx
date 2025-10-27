'use client'
import React, { useState } from 'react'
import ButtonComponent from '../../../Core/ButtonComponent';
import "./banner-with-cta.scss";
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle';
import { Toast } from 'react-bootstrap';


const BannerWithCta = () => {
    const [showToast, setShowToast] = useState(false);
    const handleCloseToast = () => setShowToast(false);

    const handleCtaClick = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="section-head">
                            <SectionTitle title="Interested to work with us ?" description="Send a line here get and update daily" />
                            {/* <h2 className="section-title">Interested to work with us ?</h2> */}
                            {/* <p className="section-description">Send a line here get and update daily</p> */}
                        </div>

                        <div className="section-body">
                            <ButtonComponent role="button" variant='dark' label='DaCode@example.com' onClick={handleCtaClick} />
                        </div>
                    </div>
                </div >
            </section>
            <Toast show={showToast} onClose={handleCloseToast}>
                <Toast.Header>
                    <strong className="me-auto">We are hiring!!</strong>
                </Toast.Header>
                <Toast.Body>Send your resume on this email <a href="mailto:DaCode@example.com">DaCode@example.com</a></Toast.Body>
            </Toast>
        </>
    )
}

export default BannerWithCta