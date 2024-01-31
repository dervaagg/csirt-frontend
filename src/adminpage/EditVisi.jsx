import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function EditProfile() {
  const textareaRef = useRef();
  const [vission, setVission] = useState([]);
  const [vissions, setVissions] = useState("");

  useEffect(() => {
    getVission();
    const refreshInterval = setInterval(() => {
      getVission();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getVission = async () => {
    const response = await axios.get("http://localhost:4001/vissions");
    setVission(response.data);
  };

  const createVission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("vissions", vissions);
    try {
      await axios.post("http://localhost:4001/vission", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setVission([...vission, { vissions }]);
      setVissions("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVission = async (vissionId) => {
    try {
      await axios.delete(`http://localhost:4001/mission/${vissionId}`);
      setVission((prevMission) =>
        prevMission.filter((item) => item.id !== vissionId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="lex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">VISI</h2>
      <form onSubmit={createVission}>
        <div className="mt-4 mb-4">
          <label className="text-black" id="address">
            Visi :{" "}
          </label>
          <textarea
            placeholder="Masukan Visi"
            ref={textareaRef}
            value={vissions}
            onChange={(e) => {
              handleChange(e);
              setVissions(e.target.value);
            }}
            className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            id="mission"
          ></textarea>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-black text-white rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-black uppercase bg-zinc-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nomor
                </th>
                <th scope="col" className="px-6 py-3">
                  Visi
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {vission.map((vission, index) => (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-b"
                  key={vission.id}
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
                    {vission.vission}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => deleteVission(vission.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
