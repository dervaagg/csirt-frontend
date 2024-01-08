import TitleOne from "../UI/TitleOne"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NewsData } from "../data/datas";
import { GoArrowLeft } from 'react-icons/go'
import { GoArrowRight } from 'react-icons/go'

export default function News() {

  const bereakpoints={
    0:{
        spaceBetween: 0,
        slidesPerView: 1,
    },
    600:{
        spaceBetween: 30,
        slidesPerView: 2,
    },
    1024:{
        spaceBetween: 60,
        slidesPerView: 3,
    }
  }
  return (
    <div className="News">
      <div className="container news-container">
      <TitleOne titleSm={'Recent News'} title={'Cyber '} titleEx={'Security'} className={'news-title'}/>
      <Swiper className="news-wrapper"
            breakpoints={bereakpoints}
            loop={true}
            autoplay={{
                delay: 4000,
            }}
            modules={[Navigation, Autoplay]}
            navigation={
                {
                prevEl: '.button-prev-slide',
                nextEl: '.button-next-slide'
                }
            }
            >
            {
                NewsData.map(({newsImage, title, category, info, newsLink}, index) =>{
                return(
                    <SwiperSlide key={index}>
                    <article className="news-article">
                        <div className="news-image">
                            <img src={newsImage} alt="Image" />
                        </div>
                        <p className="category">{category}</p>
                        <h5>{title}</h5>
                        <small>{info}</small>
                        <a href={newsLink}>Click to visit <GoArrowRight /></a>
                    </article>
                    </SwiperSlide>
                )
                })
            }
            <div className="navigation-buttons">
                <button className="button-prev-slide"><GoArrowLeft /></button>
                <button className="button-next-slide"><GoArrowRight /></button>
            </div>
        </Swiper>
      </div>
    </div>
  )
}
