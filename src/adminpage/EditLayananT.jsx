import axios from "axios";
import { useState, useEffect } from "react";

export default function EditLayananT() {
  const [other, setOther] = useState([]);
  const [services, setServices] = useState("");

  useEffect(() => {
    getOther();
    const refreshInterval = setInterval(() => {
      getOther();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getOther = async () => {
    const response = await axios.get("http://localhost:4001/other");
    setOther(response.data);
  };

  const deleteOther = async (otherId) => {
    try {
      await axios.delete(`http://localhost:4001/other/${otherId}`);
      setOther((prevOther) => prevOther.filter((item) => item.id !== otherId));
    } catch (error) {
      console.log(error);
    }
  };

  const createServices = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("services", services);
    try {
      await axios.post("http://localhost:4001/other", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setOther([...other, { services }]);
      setServices("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Layanan Tambahan</h2>
      <form onSubmit={createServices}>
        <div className="mt-4">
          <label className="text-black" id="name">
            Layanan Utama :
          </label>
          <input
            placeholder="Isi Layanan Tambahan"
            className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            type="text"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          ></input>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-black text-white rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
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
          <tbody>
            {other.map((other, index) => (
              <tr
                className="odd:bg-white even:bg-gray-50 border-b"
                key={other.id}
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
                  {other.services}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => deleteOther(other.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
