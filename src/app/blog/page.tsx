import React from 'react'
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'
import NewsArticleSection from '@/components/Generic/Section/NewsArticleSection/NewsArticleSection'

const page = () => {
  return (
    <main className="main-section-wrapper">
      <div className="section-background">
        <SectionTitle
          title="News & Articles"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          showSearchBar={true}
        />
      </div>
      <div className="news-article-section-wrapper">
        <NewsArticleSection />
      </div>
    </main>
  )
}

export default page