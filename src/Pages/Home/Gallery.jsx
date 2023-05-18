import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./gallery.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Gallery = () => {
    const [loading, setloadng] = useState(true);
    const [galleryData, setData] = useState([]);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



    useEffect(() => {
        fetch(`http://localhost:3000/allToys`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                // console.log(data);
                setloadng(false)
            })
    }, [])

    return (
        <div className=' lg:h-[200px] md:lg:h-[200px] h-36 mt-1 mb-2'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    galleryData.map(img =><SwiperSlide key={img._id}>
                        <img className=' object-contain'  src={img.productImg} />
                    </SwiperSlide>)
                }
                
            </Swiper>
        </div>
    );
};

export default Gallery;