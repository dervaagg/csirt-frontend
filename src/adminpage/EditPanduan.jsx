import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

export default function EditPanduan() {
  const [selectedPanduanId, setSelectedPanduanId] = useState([]);
  const [panduan, setPanduan] = useState([]);
  const [, setFile] = useState("");

  useEffect(() => {
    getPanduan();
    const refreshInterval = setInterval(() => {
      getPanduan();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getPanduan = async () => {
    try {
      const response = await axios.get("http://localhost:4001/panduan");
      setPanduan(response.data);
    } catch (error) {
      console.error("Gagal Memuat Dokumen Panduan", error.message);
    }
  };

  const handleDelete = async (panduanId) => {
    try {
      await axios.delete(`http://localhost:4001/panduan/${panduanId}`);
      message.success("Dokumen Panduan Berhasil Dihapus.");
      getPanduan();
    } catch (error) {
      message.error("Gagal Menghapus Dokumen Panduan");
    }
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Batal Menghapus Dokumen Panduan");
  };

  const handlePanduanClick = async (panduanId) => {
    setSelectedPanduanId(panduanId);
    try {
      const panduanResponse = await axios.get(
        `http://localhost:4001/panduan/${panduanId}`
      );
      const selectedPanduanData = panduanResponse.data;
      setFile(selectedPanduanData.file);
    } catch (error) {
      console.error("Error fetching selected news data:", error);
    }
  };

  return (
    <div className="mt-10 flex flex-col min-h-full bg-white rounded-lg p-1 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-xl">EDIT PANDUAN</h2>
      <div className="flex mt-5 max-h-full">
        {panduan.map((panduan, index) => (
          <React.Fragment key={index}>
              <Link
                className=" font-semibold hover:text-black max-w-50"
                onClick={() => handlePanduanClick(panduan.id)}
              >
                {panduan.file_title}
              </Link>
              {selectedPanduanId === panduan.id && (
                <>
                  <Popconfirm
                    title="Apakah Kamu Mau Hapus Dokumen Panduan Ini?"
                    description="Kalau dihapus tidak bisa dikembalikan lagi loh"
                    onConfirm={() => handleDelete(panduan.id)}
                    onCancel={cancel}
                    okText="Iya Dong"
                    cancelText="Gak Jadi Deh"
                  >
                    <button className="ml-1 mr-2 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-red-600 hover:bg-red-400 transition-colors">
                      <DeleteOutlined />
                    </button>
                  </Popconfirm>

                  <object
                    data={panduan.url}
                    type="application/pdf"
                    width="100%"
                    height="800px"
                    style={{
                      marginBottom: "20px",
                      borderRadius: "5px",
                      boxShadow: "0 0 5px 0 rgba(0, 0, 0, 3)",
                    }}
                  >
                    <p>
                      Dokumen hanya bisa di tampilkan pada Mode Desktop saja.
                      Tidak bisa pada Mode Mobile.
                    </p>
                  </object>
                </>
              )}

          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
