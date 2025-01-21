// import React from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';

// const Slider = () => {
//   return (
//     <div>
//               <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

// export default Slider

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/globals.css';
import SliderCard from './SliderCard';

export default function Slider() {
   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
               320: {
                   slidesPerView: 1,
                   spaceBetween: 10,
               },
               640: {
                   slidesPerView: 2,
                   spaceBetween: 20,
               },

           }}
            className="mySwiper"
         >
            <SwiperSlide>
               <SliderCard 
               style={'bg-[#9642FF] text-white border border-[#9642FF]'} 
               parastyle={'text-white'} 
               head={'Top 5 SaaS Businesses – August 2021'} 
               para={'Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'} 
               />
            </SwiperSlide>
            <SwiperSlide>
               <SliderCard
                style={'bg-[#9642FF] text-white border border-[#9642FF]'} 
                parastyle={'text-white'} 
                head={'12 Best SaaS WordPress Themes To Convert Lead'} 
                para={'Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'} 
               />
            </SwiperSlide>
            <SwiperSlide>
               <SliderCard 
                style={'bg-[#9642FF] text-white border border-[#9642FF]'} 
                parastyle={'text-white'} 
                head={'Top 5 SaaS Businesses – August 2021'} 
                para={'Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'} 
               />
            </SwiperSlide>
            <SwiperSlide>
               <SliderCard 
                style={'bg-[#9642FF] text-white border border-[#9642FF]'} 
                parastyle={'text-white'} 
                head={'Top 5 SaaS Businesses – August 2021'} 
                para={'Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'} 
               />
            </SwiperSlide>

            <SwiperSlide>
               <SliderCard 
                style={'bg-[#9642FF] text-white border border-[#9642FF]'} 
                parastyle={'text-white'} 
                head={'Top 5 SaaS Businesses – August 2021'} 
                para={'Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'} 
               />
            </SwiperSlide>

            <SwiperSlide>
               <SliderCard 
                style={'bg-[#9642FF] text-white border border-[#9642FF]'} 
                parastyle={'text-white'} 
                head={'Top 5 SaaS Businesses – August 2021'} 
                para={'Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS'} 
               />
            </SwiperSlide>


         </Swiper>
      </>
   );
} 