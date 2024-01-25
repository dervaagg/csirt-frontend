import TitleOne from "../UI/TitleOne"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NewsViewData } from "../data/datas"
import { GoArrowLeft } from 'react-icons/go'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom';

export default function News() {

    const bereakpoints={
        0:{
            spaceBetween: 0,
            slidesPerView: 1,
        },
        666:{
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
                <TitleOne titleSm={'Berita Terkini'} title={'Cyber '} titleEx={'Security'} className={'news-title'}/>
                <Swiper className="news-wrapper"
                        breakpoints={bereakpoints}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                        }}
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: '.button-prev-slide',
                            nextEl: '.button-next-slide'
                        }}>
                        {NewsViewData.map((items, index) =>{
                            return(
                                <SwiperSlide key={index}>
                                    <article className="news-article">
                                        <div className="news-image">
                                            <Link to={`/news/${items.id}`}><img src={items.newsImage} alt="Image" /></Link>
                                        </div>
                                        <p className="category">{items.category}</p>
                                        <Link to={`/news/${items.id}`}><h5>{items.title}</h5></Link>
                                        <small>{items.info}</small>
                                        <Link to={`/news/${items.id}`} className="news-link">Baca Lebih Lanjut <GoArrowRight /></Link>
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
