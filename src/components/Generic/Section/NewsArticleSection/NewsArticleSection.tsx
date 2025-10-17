'use client'
import React from 'react'
import './news-article-section.scss'
import { blogData } from '../../../../data/myData'
import InfoCardV2 from '../../Cards/InfoCardV2/InfoCardV2'

const NewsArticleSection = () => {
  return (
    <section className='news-article-section' dir="ltr">
      <div className="container">
        <div className="news-article-wrapper">
          <div className="news-article-cards-wrapper">
            {blogData.map((blog) => (
              <InfoCardV2 key={blog.id} data={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsArticleSection