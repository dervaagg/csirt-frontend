import { useState } from "react";
import EditPanduan from "./EditPanduan";
import axios from "axios";

export default function AddPanduan() {
  const [file_title, setFileTitle] = useState("");
  const [file, setFile] = useState("");
  const [cover, setCover] = useState("");
  const [preview, setPreview] = useState("");
  const [, setPreviewFile] = useState("");
  const [fileLoaded, setFileLoaded] = useState(false);
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const loadImage = (e) => {
    const image = e.target.files[0];
    setCover(image);
    setPreview(URL.createObjectURL(image));
  };

  const loadFile = (e) => {
    const document = e.target.files[0];
    setFile(document);
    setPreviewFile(URL.createObjectURL(document));
    setFileLoaded(true);
  };

  const createPanduan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file_title", file_title);
    formData.append("file", file);
    formData.append("cover", cover);
    try {
      const response = await axios.post(
        "http://localhost:4001/panduan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.message);
      setFileTitle("");
      setFile("");
      setCover("");
      setPreview("");
      setPreviewFile("");
      setFileLoaded(false);
    } catch (error) {
      console.error(
        "Error submitting panduan form:",
        error.response.data.message
      );
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-1 text-black font-bold text-3xl">PANDUAN</h2>
      <form onSubmit={createPanduan}>
        <div className="mt-4">
          <label className="text-black" id="name">
            Judul Panduan <span className="text-red-500">*</span> :
          </label>
          <input
            placeholder="Masukkan Judul Untuk Panduan"
            className="mt-3 w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            type="text"
            value={file_title}
            onChange={(e) => setFileTitle(e.target.value)}
            required
          ></input>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <label className="label text-black">
            Cover Dokumen Panduan <span className="text-red-500">*</span> :
            <div className="mt-2 control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                    required
                  />
                  {!preview && (
                    <h5 className="mt-2 text-xs font-light text-red-600">
                      Format Gambar PNG/JPG/JPEG dan Ukuran Maksimal 10Mb
                    </h5>
                  )}
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
        <div className="mt-5 flex flex-col gap-2">
          <label className="label text-black">
            Dokumen Panduan <span className="text-red-500">*</span> :
            <div className="mt-2 control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadFile}
                    required
                  />
                  {!fileLoaded && (
                    <h5 className="mt-2 text-xs font-light text-red-600">
                      Format Dokumen PDF dan Ukuran Maksimal 10Mb
                    </h5>
                  )}
                  {file && file.size > maxFileSize && (
                    <h5 className="mt-2 text-xs font-light text-red-600">
                      Ukuran file melebihi batas maksimal (10MB)
                    </h5>
                  )}
                </label>
              </div>
            </div>
          </label>
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
      <EditPanduan />
    </div>
  );
}
