import React from 'react'
import UserCard from '../../Cards/UserCard/UserCard'
import { userData } from '../../../../data/myData'
import './our-team.scss'

const OurTeam = () => {
    return (
        <section className='team-section' dir="ltr">
            <div className="container">
                <div className="team-wrapper">
                    <div className="team-cards-wrapper">
                        {userData.map((user) => (
                            <UserCard key={user.id} data={user} />
                        ))}
                    </div>
                </div>
            </div >
        </section >
    )
}

export default OurTeam