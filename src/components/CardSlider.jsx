
'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../app/globals.css";

const cardData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400584/image_1.png",
        title: "Simran",
        description:
            "I am a passionate Full Stack Developer Intern at RoyalTech Innovation, working on developing modern, responsive, and user-friendly websites and web applications. I work with technologies like HTML, CSS, JavaScript, React.js, Next.js, PHP, and MySQL, while continuously improving my frontend and backend development skills. I enjoy learning new technologies, solving problems, and building innovative digital solutions",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400584/image.png",
        title: "Majid Anwar",
        description:
            "Majid Anwar is a Backend Developer Intern at Royaltech Innovation, focused on backend development, API integration, database management, and building efficient, scalable software solutions.",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400582/Increase_face_brightness_1e420f81.jpg",
        title: "Mohit Sankhyan",
        description:
            "Hello, my name is Mohit. I have skills in Social Media Management, Video Editing, and SEO. I can create engaging social media content, edit professional videos, design creative posts, and manage social media platforms. I also have knowledge of SEO, keyword research, and website optimization to improve online visibility and reach. I am creative, eager to learn, and passionate about helping businesses grow digitally.",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400581/image_3.png",
        title: "Rohit Verma",
        description:
            "I am currently working as a UI/UX Design Intern at RoyalTech Innovation, where I focus on creating user-friendly, visually appealing, and intuitive digital experiences. I work on UI design, wireframing, prototyping, and improving user experiences while continuously developing my design skills and creativity.",
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400592/image_2.png",
        title: "Vanshika Kapoor",
        description:
            "Vanshika Kapoor is a Computer Science Engineering student with knowledge of HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. She is passionate about web development, learning new technologies, and building user-friendly digital solutions through teamwork and continuous learning.",
    },
];

const CardSlider = () => {
     const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="card-slider-section">
            <div className="card-slider-container">

                <div className="card-slider-heading">
                    <span className="section-tag">MEET OUR TALENT</span>
                    <h2>
                        Our <span>Interns</span>
                    </h2>
                    <p>
                        Meet the aspiring professionals at RoyalTech Innovation,
                        gaining hands-on experience, developing new skills, and
                        turning their ideas into meaningful digital solutions.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={25}
                    slidesPerView={3}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                    className="custom-card-swiper"
                >
                    {cardData.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="custom-card">

                                <div className="custom-card-image">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="custom-card-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default CardSlider;
