
'use client';

import React from 'react';
import '../styles/TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Shreya Choudhary',
    role: 'Founder & CEO',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794308627/WhatsApp_Image_2026-11-10_at_16.03.54.jpg',
    linkedin: 'https://www.linkedin.com/in/shreya-choudhary-1667b3272/',
  },
  {
    id: 2,
    name: 'Mayank Royal',
    role: 'Founder & Managing Director',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794308829/WhatsApp_Image_2026-11-10_at_16.36.52.jpg',
    linkedin: 'https://www.linkedin.com/in/mayank-royal-7b1626443/',
  },
  {
    id: 3,
    name: 'Mathan Murugan',
    role: 'Senior UI/UX Developer',
    image: '/team-mathan-design.jpg',
    linkedin: 'https://www.linkedin.com/in/mathan-murugan-m8300917717/',
  },
  {
    id: 4,
    name: 'Vashnavi',
    role: 'Human Resources',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794481999/Professional_Portrait_of_an_Indian_Woman.png',
    linkedin: 'https://www.linkedin.com/in/vashnavi/',
  },
  {
    id: 5,
    name: 'Aditi Mehra',
    role: 'Full Stack Developer',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794481994/Professional_South_Asian_Woman_Headshot.png',
    linkedin: 'https://www.linkedin.com/in/aditimehra0298/',
  },
  {
    id: 6,
    name: 'Pankaj',
    role: 'Frontend Developer',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794482002/Professional_Studio_Headshot.png',
    linkedin: 'https://www.linkedin.com/in/pankaj1915',
  },
  {
    id: 7,
    name: 'Majid Anwar',
    role: 'Jr.Backend Developer',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400584/image.png',
    linkedin: 'https://www.linkedin.com/in/majid-anwar-3b3a04325?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 8,
    name: 'Rohit Verma',
    role: 'Jr.UI/UX Designer',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794468386/Professional_Black_Suit_Portrait.png',
    linkedin: 'http://www.linkedin.com/in/rohit-verma-627939231',
  },
  {
    id: 9,
    name: 'Mohit Sankhyan',
    role: 'Jr.Social Media Executive',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400582/Increase_face_brightness_1e420f81.jpg',
    linkedin: 'https://www.linkedin.com/in/tech-mohit/',
  },
  {
    id: 10,
    name: 'Vanshika Kapoor',
    role: 'Jr.Full Stack Developer',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400592/image_2.png',
    linkedin: 'https://www.linkedin.com/in/vanshika-k-332838278',
  },
  {
    id: 11,
    name: 'Simran',
    role: 'Jr.Full Stack Developer',
    image: 'https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400584/image_1.png',
    linkedin: 'https://www.linkedin.com/in/simran-kaur-58407a340?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">

        

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>

              <div className="team-image">
                <img
                  src={member.image}
                  alt={member.name}
                />

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM20 19h-3v-4.8c0-2.9-3.5-2.7-3.5 0V19h-3V9h3v1.6c1.4-2.6 6.5-2.8 6.5 2.5V19z" />
                  </svg>
                </a>
              </div>

              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
