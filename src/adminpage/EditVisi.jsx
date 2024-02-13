import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Popconfirm, message } from "antd";

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
      await axios.delete(`http://localhost:4001/vission/${vissionId}`);
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

  const cancel = (e) => {
    console.log(e);
    message.error("Batal Menghapus Dokumen Panduan");
  };

  return (
    <div className="lex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">VISI</h2>
      <form onSubmit={createVission}>
        <div className="mt-4 mb-4">
          <label className="text-black" id="address">
            Visi :
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
            className="bg-transparent outline outline-1 font-bold p-2 px-10 rounded-lg bg-white hover:bg-blue-500 transition-colors"
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
            <tbody className="capitalize">
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
                    <Popconfirm
                      title="Yakin Ingin Hapus Dokumen Panduan Ini?"
                      description="Jika di hapus tidak bisa dikembalikan lagi yaa"
                      onConfirm={() => deleteVission(vission.id)}
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
      </form>
    </div>
  );
}
