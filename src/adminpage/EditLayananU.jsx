import axios from "axios";
import { useState, useEffect } from "react";

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

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Layanan Utama</h2>
      <form onSubmit={createServices}>
        <div className="mt-4">
          <label className="text-black" id="name">
            Layanan Utama :{" "}
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
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => deletePrimary(primary.id)}
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
