"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Nav from "react-bootstrap/Nav";
import ButtonComponent from "@/components/Core/ButtonComponent";
import { ourWorkSwiperData, tabOptions } from "@/data/myData";
import SectionTitle from "@/components/Core/SectionTitle/SectionTitle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./our-work-section.scss";

const OurWorkSection = () => {
    const [activeTab, setActiveTab] = useState("All");

    const handleTabChange = (tabValue: string) => {
        setActiveTab(tabValue);
    };

    const filterData = ourWorkSwiperData.filter((item) => {
        if (activeTab === "All") {
            return true;
        }
        return item.value === activeTab;
    });

    return (
        <section className="our-work-section">
            <div className="container">
                <div className="our-work-wrapper">
                    <div className="works-text-wrapper">
                        <p className="section-sub-title">Portfolio</p>
                        <SectionTitle title="Our Great Work" />
                        {/* <h2 className='section-title'>Our Great Work</h2> */}
                    </div>

                    <div className="selection-wrapper">
                        <Nav variant="tabs" className="tab-buttons border-0">
                            {tabOptions.map((tab) => (
                                <Nav.Item key={tab.id}>
                                    <Nav.Link
                                        className={`tab-btn ${activeTab === tab.value ? "active" : ""
                                            }`}
                                        onClick={() => handleTabChange(tab.value)}
                                    >
                                        {tab.label}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </div>

                    <div className="works-slider-wrapper">
                        <div className="swiper-container-wrapper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: ".custom-swiper-button-next",
                                    prevEl: ".custom-swiper-button-prev",
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {filterData.map((slide) => (
                                    <SwiperSlide key={slide.id}>
                                        <div className="slide-image-wrapper">
                                            {slide.image && (
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                    width={472}
                                                    height={297}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                    loading="lazy"
                                                />
                                            )}
                                            <p className="slide-description">{slide.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Buttons */}
                            <div className="custom-swiper-button-prev">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 18L9 12L15 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="custom-swiper-button-next">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 18L15 12L9 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Design */}
                <div className="background-design">
                    <ButtonComponent label="See All" role="button" variant="dark" />
                </div>
            </div>
        </section>
    );
};

export default OurWorkSection;
