import React from 'react'
import "./services-page.scss"
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'
import BannerWithCta from '@/components/Generic/Section/BannerWithCta/BannerWithCta'
import ScheduleSession from '@/components/Generic/Section/ScheduleSession/ScheduleSession'
import ServiceSection from '@/components/Generic/Section/ServiceSection/ServiceSection'

const page = () => {
  return (
    <main className="main-section-wrapper">
      <div className="section-background">
        <SectionTitle
          title="What we can offer your SaaS Business"
          description="We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns."
        />
      </div>
      <div className="service-section-wrapper">
        <ServiceSection />
      </div>
      <BannerWithCta />
      <ScheduleSession />
    </main>
  )
}

export default page