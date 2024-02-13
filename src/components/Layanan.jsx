import { useEffect, useState } from "react";
import axios from "axios";
import utamaImg from "../assets/layanan_01.svg";
import tambahanImg from "../assets/layanan_02.svg";
import "../css/Layanan.css";

export default function Layanan() {
  const [primary, setPrimary] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    const fetchPrimary = async () => {
      try {
        const response = await axios.get("http://localhost:4001/primary");
        setPrimary(response.data);
      } catch (error) {
        console.error("Error fetching primary services:", error);
      }
    };

    const fetchOther = async () => {
      try {
        const response = await axios.get("http://localhost:4001/other");
        setOther(response.data);
      } catch (error) {
        console.error("Error fetching other services:", error);
      }
    };

    const refreshInterval = setInterval(() => {
      fetchPrimary();
      fetchOther();
    }, 1000);

    fetchPrimary();
    fetchOther();

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="container container-layanan">
      <div className="layanan-utama">
        <div className="layanan-utama-right">
          <img src={utamaImg} alt="" />
        </div>
        <div className="layanan-utama-left">
          <div className="title-layanan uppercase">
            <h4>Layanan Utama</h4>
          </div>
          {primary.map((primaryService, index) => (
            <ul key={primaryService.id}>
              <li>{index + 1 + ". " + primaryService.services}</li>
              <br />
            </ul>
          ))}
        </div>
      </div>

      <div className="layanan-tambahan">
        <div className="layanan-tambahan-right">
          <div className="title-layanan uppercase">
            <h4>Layanan Tambahan</h4>
          </div>
          {other.map((otherService, index) => (
            <ul key={otherService.id}>
              <li>{index + 1 + ". " + otherService.services}</li>
              <br />
            </ul>
          ))}
        </div>
        <div className="layanan-tambahan-left">
          <img src={tambahanImg} alt="" />
        </div>
      </div>
    </div>
  );
}
