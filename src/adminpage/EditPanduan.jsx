import { useState, useEffect } from "react";

import { Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
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
  //   setSelectedPanduanId(panduanId);
  //   try {
  //     const panduanResponse = await axios.get(
  //       `http://localhost:4001/panduan/${panduanId}`
  //     );
  //     const selectedPanduanData = panduanResponse.data;
  //     setFile(selectedPanduanData.file);
  //   } catch (error) {
  //     console.error("Error fetching selected news data:", error);
  //   }
  // };

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
                    title="Yakin Ingin Hapus Dokumen Panduan Ini?"
                    description="Jika di hapus tidak bisa dikembalikan lagi yaa"
                    onConfirm={() => handleDelete(panduan.id)}
                    onCancel={cancel}
                    okText="Iya Dong"
                    cancelText="Gak Jadi Deh"
                  >
                    <button className="ml-1 mr-2 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-red-600 hover:bg-red-400 transition-colors">
                      <DeleteOutlined /> Hapus
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
