import axios from "axios";
import { useState, useEffect } from "react";
import { Popconfirm, message } from "antd";

export default function EditLayananU() {
  const [primary, setPrimary] = useState([]);
  const [services, setServices] = useState("");

  useEffect(() => {
    getPrimary();
    const refreshInterval = setInterval(() => {
      getPrimary();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getPrimary = async () => {
    const response = await axios.get("http://localhost:4001/primary");
    setPrimary(response.data);
  };

  const deletePrimary = async (primaryId) => {
    try {
      await axios.delete(`http://localhost:4001/primary/${primaryId}`);
      setPrimary((prevPrimary) =>
        prevPrimary.filter((item) => item.id !== primaryId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const createServices = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("services", services);
    try {
      await axios.post("http://localhost:4001/primary", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPrimary([...primary, { services }]);
      setServices("");
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Batal Menghapus Dokumen Panduan");
  };

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Layanan Utama</h2>
      <form onSubmit={createServices}>
        <div className="mt-4">
          <label className="text-black" id="name">
            Layanan Utama :
          </label>
          <input
            placeholder="Isikan Layanan Utama"
            className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            type="text"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          ></input>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="mb-2 bg-transparent outline outline-1 font-bold p-2 px-10 rounded-lg bg-white hover:bg-blue-500 transition-colors"
            type="submit"
          >
            Tambah
          </button>
        </div>
      </form>
      <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-black uppercase bg-zinc-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nomor
              </th>
              <th scope="col" className="px-6 py-3">
                Layanan Utama
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="capitalize">
            {primary.map((primary, index) => (
              <tr
                className="odd:bg-white even:bg-gray-50 border-b"
                key={primary.id}
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
                  {primary.services}
                </td>
                <td className="px-6 py-4">
                  <Popconfirm
                    title="Yakin Ingin Hapus Dokumen Panduan Ini?"
                    description="Jika di hapus tidak bisa dikembalikan lagi yaa"
                    onConfirm={() => deletePrimary(primary.id)}
                    onCancel={cancel}
                    okText="Iya Dong"
                    cancelText="Gak Jadi Deh"
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
