import React from 'react';
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'


import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Snow',
    review: 'Owais has an insatiable thirst for knowledge and a dedication to staying abreast of the latest frontend technologies and trends. Their commitment to ongoing learning ensures they are always at the forefront of web development innovation.',
  },

  {
    avatar: AVATAR2,
    name: 'Shatty',
    review: 'With a deep understanding of user behavior and needs, Owais consistently designs frontend solutions that prioritize usability and accessibility, creating meaningful experiences for all users. Their designs are sleek, modern, and intuitive, enhancing the overall user experience.',
  },

  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review: 'Owais Altamash is a true team player, always willing to lend a helping hand and collaborate effectively with colleagues. Their positive attitude and strong communication skills make them a valuable asset to any project team.',
  },

  {
    avatar: AVATAR4,
    name: 'Diana wellims',
    review: 'With a keen focus on performance optimization, Owais Altamash consistently delivers frontend solutions that are not only visually appealing but also fast and responsive, enhancing the overall user satisfaction.',
  }
]

const Testimonials = () => {
  return (
    <section id='testamonials'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section> 
  )
}
export default Testimonials;