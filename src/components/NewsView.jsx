
import { useParams } from "react-router-dom";
import "../css/NewsViewer.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function NewsView() {
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

  const { id } = useParams();
  const news = newses.find((news) => news.id === Number(id));

return (
  <div className="container-newsview">
    {news && (
      <>
      <div className="container header-news">
        <img src={news.url} alt="" />
        <div className="title">
          <h3>{news.title}</h3>
          <small>{news.category}</small>
        </div>
      </div>
      <div className="container content-news">
        <div className="container-sumber">
          <p>
            <a href={news.source}></a>
          </p>
          <p>Tanggal {news.date}</p>
        </div>
        <div className="text">
          <p className="sub-title">{news.sub_title1}</p>
          <p>{news.paragraph1}</p>
          <p className="sub-title">{news.sub_title2}</p>
          <p>{news.paragraph2}</p>
          <p className="sub-title">{news.sub_title3}</p>
          <p>{news.paragraph3}</p>
        </div>
      </div>
      </>      
    )}
  </div>
);
}
