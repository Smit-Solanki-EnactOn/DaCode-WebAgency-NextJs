import React from 'react'
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'
import OurTeam from '@/components/Generic/Section/OurTeam/OurTeam'
import './specialists-page.scss'

const page = () => {
  return (
    <main className="main-section-wrapper">
      <div className="section-background">
        <SectionTitle
          title="The Team"
          description="Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world."
        />
      </div>
      <div className="team-section-wrapper">
        <OurTeam />
      </div>
    </main>
  )
}

export default page