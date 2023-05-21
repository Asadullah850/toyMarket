import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Rating } from '@smastrom/react-rating'
import "./gallery.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SliderProducts = () => {

    const [loading, setloadng] = useState(true);
    const [galleryData, setData] = useState([]);
    const [wishlist, setWishlist] = useState(true)

    useEffect(() => {
        fetch(`https://toyserver-two.vercel.app/allToys`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                // console.log(data);
                setloadng(false)
            })
    }, [])

    return (
        <div className='h-[550px] mt-10 mb-2'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                  }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    galleryData.map(img => <SwiperSlide className='mt-20' key={img._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <div className=" rounded-lg">
                                <img className='w-full rounded-lg' src={img.productImg} alt="" />
                                
                            </div>
                            <div className="card-body text-left">
                                <h2 className="card-title">Product Name: {img.productName}</h2>
                                <p className='text-xl font-semibold'>Price:$ {img.productPrice}</p>
                                <p>Rating: {img.rating}</p>
                                <Rating className=' mt-4 pt-4 mr-auto inline-block'
                                    style={{ maxWidth: 150 }}
                                    value={img.rating}
                                    readOnly
                                />
                                <div className="card-actions justify-end">
                                    <td><Link to={`/viewPage/${img._id}`}><button className='btn btn-primary'>View</button></Link></td>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default SliderProducts;