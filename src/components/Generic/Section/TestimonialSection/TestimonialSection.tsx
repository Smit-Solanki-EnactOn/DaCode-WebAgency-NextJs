'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './testimonial-section.scss'
import { testimonials } from '@/data/myData'
import { FaStar } from "react-icons/fa";
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'

const TestimonialSection = () => {
    const mainSwiperRef = useRef<HTMLDivElement | null>(null);
    const thumbSwiperRef = useRef<HTMLDivElement | null>(null);
    const mainSwiperInstance = useRef<Swiper | null>(null);
    const thumbSwiperInstance = useRef<Swiper | null>(null);

    useEffect(() => {
        // Initialize thumbnail swiper first
        if (thumbSwiperRef.current && !thumbSwiperInstance.current) {
            thumbSwiperInstance.current = new Swiper(thumbSwiperRef.current, {
                modules: [Thumbs],
                spaceBetween: 20,
                slidesPerView: 3,
                watchSlidesProgress: true,
                centeredSlides: true,
                slideToClickedSlide: true,
                breakpoints: {
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            })
        }

        // Initialize main swiper with thumbs
        if (mainSwiperRef.current && thumbSwiperInstance.current) {
            mainSwiperInstance.current = new Swiper(mainSwiperRef.current, {
                modules: [Navigation, Thumbs],
                spaceBetween: 30,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: thumbSwiperInstance.current,
                },
                loop: false,
                speed: 600,
                breakpoints: {
                    768: {
                        slidesPerView: 1
                    }
                }
            })
        }

        // Cleanup function to destroy Swiper instances
        return () => {
            if (mainSwiperInstance.current) {
                mainSwiperInstance.current.destroy(true, true);
                mainSwiperInstance.current = null;
            }
            if (thumbSwiperInstance.current) {
                thumbSwiperInstance.current.destroy(true, true);
                thumbSwiperInstance.current = null;
            }
        };
    }, []);

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="testimonials-wrapper">
                    <div className="section-head">
                        <p className="section-sub-title">Testimonials</p>
                        <SectionTitle title="What Our Clients Say"  />
                        {/* <h2 className="section-title">Our Happy Clients</h2> */}
                    </div>

                    <div className="section-body">
                        {/* Main Testimonial Slider */}
                        <div className="swiper testimonials-swiper" ref={mainSwiperRef}>
                            <div className="swiper-wrapper">
                                {testimonials.map((testimonial, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="testimonial-card">
                                            <div className="testimonial-content">
                                                <div className="rating">
                                                    <span className="rating-number">{testimonial.rating}</span>
                                                    <div className="stars">
                                                        {[...Array(5)].map((_, i) => (
                                                            <FaStar key={i} className="star-icon" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="testimonial-text">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>

                        {/* Thumbnail Slider */}
                        <div className="swiper testimonials-swiper-thumbs" ref={thumbSwiperRef}>
                            <div className="swiper-wrapper">
                                {testimonials.map((testimonial, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="thumbnail-item">
                                            <div className="avatar-wrapper">
                                                <Image
                                                    src={testimonial.image.replace('/public', '')}
                                                    alt={testimonial.author}
                                                    className="avatar-image"
                                                    width={80}
                                                    height={80}
                                                    loading='lazy'
                                                />
                                            </div>
                                            <div className="author-info">
                                                <h3 className="author-name">{testimonial.author}</h3>
                                                <p className="author-position">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Background Decoration */}
                    <div className=" background-decoration">
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
            </div>
        </section>
    )
}

export default TestimonialSection