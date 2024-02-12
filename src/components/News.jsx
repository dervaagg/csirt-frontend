import TitleOne from "../UI/TitleOne";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function News() {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    const fetchNewses = async () => {
      try {
        const response = await axios.get("http://localhost:4001/newses");
        setNewses(response.data);
      } catch (error) {
        console.error("Error fetching news services:", error);
      }
    };

    const refreshInterval = setInterval(() => {
      fetchNewses();
    }, 1000);
    fetchNewses();

    return () => clearInterval(refreshInterval);
  }, []);

  const bereakpoints = {
    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    666: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
  };
  return (
    <div className="News">
      <div className="container news-container">
        <TitleOne
          titleSm={"Berita Terkini"}
          title={"Cyber "}
          titleEx={"Security"}
          className={"news-title"}
        />
        <Swiper
          className="news-wrapper"
          breakpoints={bereakpoints}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {newses.map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <article className="news-article">
                  <div className="news-image">
                    <Link to={`/news/${news.id}`}>
                      <img src={news.url} alt="Image" />
                    </Link>
                  </div>
                  <p className="category">{news.category}</p>
                  <Link to={`/news/${news.id}`}>
                    <h5>{news.title}</h5>
                  </Link>
                  <small>{news.content}</small>
                  <Link to={`/news/${news.id}`} className="news-link">
                    Baca Lebih Lanjut <GoArrowRight />
                  </Link>
                </article>
              </SwiperSlide>
            );
          })}
          <div className="navigation-buttons">
            <button className="button-prev-slide">
              <GoArrowLeft />
            </button>
            <button className="button-next-slide">
              <GoArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
