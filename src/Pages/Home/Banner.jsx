import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Banner = () => {
    const [loading, setloadng] = useState(true);
    const [bannerData, setbannerData] = useState([]);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



    useEffect(() => {
        fetch(`https://toyserver-two.vercel.app/banner`)
            .then(res => res.json())
            .then(data => {
                setbannerData(data)
                // console.log(data);
                setloadng(false)
            })
    }, [])

    return (
        <div className=' lg:h-80 md:lg:h-48 h-36 mt-1 mb-2'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper "
            >
                {
                    bannerData.map(banner => <SwiperSlide key={banner._id}>

                        <div className="">
                            <img  src={banner.productImg} alt="" srcset="" />
                        </div>
                        <div className=" absolute w-full bottom-10">
                            <p className='lg:mb-10 w-full lg:text-4xl md:text-4xl text-xl text-pink-800 font-semibold text-start px-[10%]'>{banner.productName}</p>
                            <div className="text-start lg:ml-20 ml-4">
                                <span className='btn btn-secondary lg:px-10 lg:mx-4 mx-2 font-extrabold text-4xl'> {banner.discount}%</span>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="autoplay-progress hidden" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;