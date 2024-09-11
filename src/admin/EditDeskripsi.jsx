import { useRef, useState, useEffect } from "react";
import { Image, Descriptions } from "antd";
import axios from "axios";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function EditProfile() {
  const textareaRef = useRef();
  const [profile, setProfile] = useState([]);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [about, setAbout] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  useEffect(() => {
    getProfile();
    const refreshInterval = setInterval(() => {
      getProfile();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getProfile = async () => {
    const response = await axios.get("http://localhost:4001/profiles");
    setProfile(response.data);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (first_name.trim() !== "") {
      formData.append("first_name", first_name);
    }
    if (last_name.trim() !== "") {
      formData.append("last_name", last_name);
    }
    if (about.trim() !== "") {
      formData.append("about", about);
    }
    if (file) {
      formData.append("image", file);
    }
    try {
      await axios.patch("http://localhost:4001/profile/1", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAbout("");
      setFirstName("");
      setLastName("");
      setFile("");
      setPreview("");
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
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">DESKRIPSI</h2>
      {profile.map((profile) => (
        <>
          <Image
            label="Gambar"
            className="rounded-md"
            width={150}
            src={profile.url}
          />
          <br />
          <br />
          <Descriptions>
            <Descriptions.Item label="Nama Awal">
              {profile.first_name}
            </Descriptions.Item>
            <Descriptions.Item label="Nama Akhir">
              {profile.last_name}
            </Descriptions.Item>
            <Descriptions.Item label="Tentang">
              {profile.about}
            </Descriptions.Item>
          </Descriptions>
        </>
      ))}
      <h2 className=" mb-5 text-base font-semibold">
        <InfoCircleOutlined /> Form Edit Deskripsi
      </h2>
      <form onSubmit={updateProfile}>
        <div className="mt-4">
          <label className="text-black" id="name">
            Nama Awal :
          </label>
          <input
            placeholder="Masukkan Nama Profil"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
            type="text"
          ></input>
        </div>
        <div className="mt-4">
          <label className="text-black" id="name">
            Nama Akhir :
          </label>
          <input
            placeholder="Masukkan Nama Profil"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
            type="text"
          ></input>
        </div>
        <div className="mt-4">
          <label className="text-black" id="name">
            Tentang :
          </label>
          <textarea
            placeholder="Masukan Deskripsi Profil"
            ref={textareaRef}
            value={about}
            onChange={(e) => {
              handleChange(e);
              setAbout(e.target.value);
            }}
            className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
            type="text"
          ></textarea>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <label className="label text-black">
            Gambar :
            <div className="mt-2 control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                </label>
              </div>
            </div>
          </label>
          {preview ? (
            <figure className="w-32 h-32">
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover rounded-md"
              />
            </figure>
          ) : (
            ""
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="mb-2 bg-transparent outline outline-1 font-bold p-2 px-10 rounded-lg bg-white hover:bg-blue-500 transition-colors"
            type="submit"
          >
            Perbarui
          </button>
        </div>
      </form>
    </div>
  );
}
