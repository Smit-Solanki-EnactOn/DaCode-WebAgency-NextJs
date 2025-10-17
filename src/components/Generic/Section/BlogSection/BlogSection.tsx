'use client'
import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './blog-section.scss'
import { blogPosts } from '../../../../data/myData'
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'

const BlogSection = () => {
    const swiperRef = useRef(null)
    const swiperInstance = useRef<Swiper | null>(null)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        if (swiperRef.current) {
            swiperInstance.current = new Swiper(swiperRef.current, {
                modules: [Navigation],
                slidesPerView: 'auto',
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        spaceBetween: 15
                    },
                    768: {
                        spaceBetween: 20
                    },
                    1024: {
                        spaceBetween: 24
                    }
                }
            })
        }

        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy(true, true)
            }
        }
    }, [])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <section className="blog-section">
            <div className="blog-wrapper">
                <div className="blog-content">
                    <div className="section-head">
                        <p className="section-sub-title">News & Articles</p>
                        <SectionTitle title="DaCode Blog" description="On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry." />
                        {/* <h2 className="section-title">DaCode Blog</h2> */}
                        {/* <p className="section-description">
                            On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto
                            industry.
                        </p> */}
                        <div className={`collapse-content ${isExpanded ? 'expanded' : ''}`}>
                            <p className="section-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa pariatur, omnis a obcaecati dolorem.
                            </p>
                        </div>
                        <div className="button-wrapper">
                            <button 
                                className="btn-outline" 
                                onClick={toggleExpand}
                                aria-expanded={isExpanded}
                            >
                                {isExpanded ? 'Show Less' : 'See All'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="section-body">
                    <div className="swiper blog-swiper" ref={swiperRef}>
                        <div className="swiper-wrapper">
                            {blogPosts.map((post, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <h3 className="blog-card-title">{post.title}</h3>
                                            <p className="blog-card-description">{post.description}</p>
                                            <a href="#" className="blog-card-link">
                                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection