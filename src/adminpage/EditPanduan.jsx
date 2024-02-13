import { useState, useEffect } from "react";

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
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">
        Layanan Tambahan
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
                    <button className="button-delete">
                      <svg viewBox="0 0 448 512" className="svgIconDelete">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
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
