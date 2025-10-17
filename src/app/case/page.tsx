import React from 'react'
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'


const page = () => {
  return (
    <main className="main-section-wrapper">
      <div className="section-background">
        <SectionTitle
          title="ShowCase Page"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          showSearchBar={true}
        />
      </div>
    </main>
  )
}

export default page