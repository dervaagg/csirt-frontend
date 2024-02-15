import { useState, useEffect } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import axios from "axios";

export default function EditPanduan() {
  const [panduan, setPanduan] = useState([]);

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

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mb-1 mt-5 text-base font-semibold">
        <InfoCircleOutlined /> Edit Dokumen Panduan
      </h2>
      <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-black uppercase bg-zinc-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nomor
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Dokumen Panduan
              </th>
              <th scope="col" className="px-6 py-3">
                Cover Panduan
              </th>
              <th scope="col" className="px-6 py-3">
                Dokumen Panduan
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="capitalize">
            {panduan.map((panduan, index) => (
              <tr
                className="odd:bg-white even:bg-gray-50 border-b"
                key={panduan.id}
              >
                <td
                  scope="row"
                  className="px-10 py-4 font-medium text-black whitespace-nowrap"
                >
                  {index + 1}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {panduan.file_title}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={panduan.urlCover}
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Sampul Panduan
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={panduan.url}
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Dokumen Panduan
                  </a>
                </td>
                <td className="px-6 py-4">
                  <Popconfirm
                    title="Apakah Ingin Menghapus Dokumen Panduan Ini?"
                    description="Jika Sudah Dihapus, Tidak Dapat Dikembalikan Lagi."
                    onConfirm={() => handleDelete(panduan.id)}
                    onCancel={cancel}
                    okText="Iya"
                    cancelText="Tidak"
                  >
                    <button className="bin-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 39 7"
                        className="bin-top"
                      >
                        <line
                          strokeWidth="4"
                          stroke="white"
                          y2="5"
                          x2="39"
                          y1="5"
                        ></line>
                        <line
                          strokeWidth="3"
                          stroke="white"
                          y2="1.5"
                          x2="26.0357"
                          y1="1.5"
                          x1="12"
                        ></line>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 33 39"
                        className="bin-bottom"
                      >
                        <mask fill="white" id="path-1-inside-1_8_19">
                          <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                        </mask>
                        <path
                          mask="url(#path-1-inside-1_8_19)"
                          fill="white"
                          d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        ></path>
                        <path
                          strokeWidth="4"
                          stroke="white"
                          d="M12 6L12 29"
                        ></path>
                        <path
                          strokeWidth="4"
                          stroke="white"
                          d="M21 6V29"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 89 80"
                        className="garbage"
                      >
                        <path
                          fill="white"
                          d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                        ></path>
                      </svg>
                    </button>
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
