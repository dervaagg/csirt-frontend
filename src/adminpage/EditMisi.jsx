import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function EditProfile() {
  const textareaRef = useRef();
  const [mission, setMission] = useState([]);
  const [missions, setMissions] = useState("");

  useEffect(() => {
    getMission();
    const refreshInterval = setInterval(() => {
      getMission();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getMission = async () => {
    const response = await axios.get("http://localhost:4001/missions");
    setMission(response.data);
  };

  const createMission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("missions", missions);
    try {
      await axios.post("http://localhost:4001/mission", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMission([...mission, { missions }]);
      setMissions("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMission = async (missionId) => {
    try {
      await axios.delete(`http://localhost:4001/mission/${missionId}`);
      setMission((prevMission) =>
        prevMission.filter((item) => item.id !== missionId)
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
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">MISI</h2>
      <form onSubmit={createMission}>
        <div className="mt-4 mb-4">
          <label className="text-black" id="address">
            Misi :{" "}
          </label>
          <textarea
            placeholder="Masukan Misi"
            ref={textareaRef}
            value={missions}
            onChange={(e) => {
              handleChange(e);
              setMissions(e.target.value);
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
                  Misi
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {mission.map((mission, index) => (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-b"
                  key={mission.id}
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
                    {mission.mission}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => deleteMission(mission.id)}
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
