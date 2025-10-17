// UserCard.jsx
import React from 'react';
import './user-card.scss';
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import ButtonComponent from '@/components/Core/ButtonComponent';

interface UserData {
  image?: string | null;
  name?: string;
  position?: string;
  linkedinUrl?: string;
  mail: string;
}

interface UserCardProps {
  data: UserData;
}

const UserCard: React.FC<UserCardProps> = ({
  data: { image, name, position, linkedinUrl, mail }
}) => {
  return (
    <div className="user-card">
      <div className="user-card_image-wrapper">

        <Image src={image} alt="User" className="user-card_image" width={110} height={110} loading='lazy'  />

        {/* {image ? (
          <Image src={image} alt="User" className="user-card_image" width={110} height={110} loading='lazy'  />
        ) : (
          <div className="user-card_image-placeholder">
            {name?.charAt(0).toUpperCase()}
          </div>
        )} */}
      </div>

      <div className="user-card_info">
        <h3 className="user-card_name">{name}</h3>
        <p className="user-card_position">{position}</p>
      </div>

      <div className="user-card_actions">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="user-card_linkedin"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn size={20} />
          </a>
        )}

        <ButtonComponent role="button" variant="primary" label={mail} customClass='user-card_message-btn' />
      </div>
    </div>
  );
};

export default UserCard;