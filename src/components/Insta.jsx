import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide,} from "swiper/react"
import 'swiper/css';


const Insta = () => {
   
  return (
    <>
    <div className="posts">
        <div className="postflex">
            <Swiper
               speed={400}
               loop= {true}
               autoplay={{ delay: 1000 }}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide className="post">
                    <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg" alt="post" /> 
                    <div className="imgLink 1">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> 
                </SwiperSlide>

                <SwiperSlide className="post" >
                    <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg" alt="post" />
                    <div className="imgLink 2">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div>    
                </SwiperSlide>

                <SwiperSlide className="post">
                    <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg" alt="post" />
                    <div className="imgLink 3">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div>  
                </SwiperSlide>

                <SwiperSlide className="post">
                    <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery4.jpg" alt="post" />
                    <div className="imgLink 4">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery4.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> 
                </SwiperSlide>

                <SwiperSlide className="post" >
                    <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg" alt="post" />
                    <div className="imgLink 5">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> 
                </SwiperSlide>
            </Swiper>
        </div>

        </div>

    </>
  )
}

export default Insta