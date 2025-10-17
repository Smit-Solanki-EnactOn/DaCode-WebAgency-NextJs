import React from 'react'
import './info-card-v2.scss'
import Image from 'next/image'
import ButtonComponent from '@/components/Core/ButtonComponent'

interface BlogData {
  id: number
  image: string
  title: string
  description: string
  date?: string
  url: string
}

interface InfoCardV2Props {
  data: BlogData
}

const InfoCardV2: React.FC<InfoCardV2Props> = ({ data }) => {
  const handleReadMore = () => {
    if (data.url) {
      window.open(data.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="info-card-v2">
      {/* Image Section */}
      <div className="info-card-v2_image-wrapper">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={300}
          className="info-card-v2_image"
          loading='lazy'
        />
        {data.date && (
          <div className="info-card-v2_date-badge">
            {data.date}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="info-card-v2_content">
        <h3 className="info-card-v2_title">
          {data.title}
        </h3>
        <p className="info-card-v2_description">
          {data.description}
        </p>
        <ButtonComponent variant='primary' label='Read More' role='link' url={data.url} />
      </div>
    </div>
  )
}

export default InfoCardV2