import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Popconfirm, message, Space, Alert } from "antd";
import { useRef } from "react";
import { NewsViewData } from "../data/datas";

export default function EditNews() {
  const [newses, setNewses] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [contents, setContents] = useState([]);
  const [sub_title1, setSub_title1] = useState("");
  const [paragraph1, setParagraph1] = useState("");
  const [sub_title2, setSub_title2] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [sub_title3, setSub_title3] = useState("");
  const [paragraph3, setParagraph3] = useState("");
  const [errorAlert, setErrorAlert] = useState(null);
  const textareaRef = useRef();
  const [currentNewsItem, setCurrentNewsItem] = useState(null);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  useEffect(() => {
    getNewses();
    const refreshInterval = setInterval(() => {
      getNewses();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    getContents();
    const refreshInterval = setInterval(() => {
      getContents();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getNewses = async () => {
    try {
      const response = await axios.get("http://localhost:4001/newses");
      setNewses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getContents = async () => {
    try {
      const response = await axios.get("http://localhost:4001/contents");
      setContents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateNews = async (newsId) => {
    const formData = new FormData();
    if (title.trim() !== "") {
      formData.append("title", title);
    }
    if (category.trim() !== "") {
      formData.append("category", category);
    }
    if (content.trim() !== "") {
      formData.append("content", content);
    }
    if (source.trim() !== "") {
      formData.append("source", source);
    }
    if (date.trim() !== "") {
      formData.append("date", date);
    }
    if (file) {
      formData.append("image", file);
    }
    try {
      const allowedType = ["jpeg", "jpg", "png"];
      const extension = file.name.split(".").pop();
      if (!allowedType.includes(extension.toLowerCase())) {
        setErrorAlert({
          type: "error",
          message: "Image type must be jpeg/jpg/png",
        });
        return;
      }
      const fileSize = file.size / 1024 / 1024;
      if (fileSize > 10) {
        setErrorAlert({
          type: "error",
          message: "Image must be less than 10 mb",
        });
        return;
      }
      await axios.patch(`http://localhost:4001/news/${newsId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setCategory("");
      setContent("");
      setSource("");
      setDate("");
      setFile("");
      setPreview("");
    } catch (error) {
      console.error("Error submitting news form:", error.message);
    }
  };

  const deleteNews = async (newsId) => {
    try {
      await axios.delete(`http://localhost:4001/news/${newsId}`);
      message.success("News deleted successfully.");
    } catch (error) {
      console.error("Error deleting news:", error.message);
    }
  };

  const updateContent = async (contentId) => {
    const formData = new FormData();
    if (sub_title1.trim() !== "") {
      formData.append("sub_title1", sub_title1);
    }
    if (paragraph1.trim() !== "") {
      formData.append("paragraph1", paragraph1);
    }
    if (sub_title2.trim() !== "") {
      formData.append("sub_title2", sub_title2);
    }
    if (paragraph2.trim() !== "") {
      formData.append("paragraph2", paragraph2);
    }
    if (sub_title3.trim() !== "") {
      formData.append("sub_title3", sub_title3);
    }
    if (paragraph3.trim() !== "") {
      formData.append("paragraph3", paragraph3);
    }
    try {
      await axios.patch(
        `http://localhost:4001/content/${contentId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSub_title1("");
      setParagraph1("");
      setSub_title2("");
      setParagraph2("");
      setSub_title3("");
      setParagraph3("");
    } catch (error) {
      console.error("Error updating content:", error.message);
    }
  };

  const deleteContent = async (contentId) => {
    try {
      await axios.delete(`http://localhost:4001/content/${contentId}`);
      message.success("Content deleted successfully.");
    } catch (error) {
      console.error("Error deleting content:", error.message);
    }
  };

  const setSelectedNews = (id) => {
    const newsItem = NewsViewData.find((item) => item.id === id);
    setCurrentNewsItem(newsItem);
  };

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Edit Berita</h2>
      {errorAlert && (
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Alert
            message="Error"
            description={errorAlert.message}
            type={errorAlert.type}
            showIcon
          />
        </Space>
      )}
      <div className="flex mt-5 max-h-full">
        <div className="flex flex-col mr-6">
          {newses.map((news, index) => (
            <ul key={index} className="list-none grid pb-2">
              <li
                className={`flex items-center w-full h-16 rounded-l-full text-base ${
                  currentNewsItem?.id === news.id
                    ? "bg-zinc-500 text-white"
                    : ""
                }`}
              >
                <Link
                  className="ml-5 font-semibold hover:text-black w-full"
                  onClick={() => setSelectedNews(news.id)}
                >
                  {news.title}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex flex-col-reverse justify-center w-full">
          <div className="w-full h-full">
            <div className="mt-4">
              <label className="text-black" id="address">
                Judul :
              </label>
              <input
                placeholder="Masukkan Judul Berita"
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.title || ""}
                // onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="address">
                Kategori :
              </label>
              <input
                placeholder="Masukkan Kategori Berita"
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.category || ""}
                // onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-4 mb-4">
              <label className="text-black" id="address">
                Info :
              </label>
              <textarea
                placeholder="Masukkan Info Berita"
                ref={textareaRef}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.info || ""}
                onChange={(e) => {
                  handleChange(e);
                  // setOperasional(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="flex w-full justify-between gap-6">
              <div className="grid w-full">
                <label className="text-black" id="address">
                  Nama Penulis :
                </label>
                <input
                  placeholder="Masukkan Penulis Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="address"
                  value={currentNewsItem?.namaPenulis || ""}
                  // onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="grid w-full">
                <label className="text-black" id="address">
                  Tanggal Dibuat :
                </label>
                <input
                  placeholder="Masukkan Tanggal Dibuatnya Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="address"
                  value={currentNewsItem?.tanggalUpload || ""}
                  // onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="grid w-full">
                <label className="text-black" id="address">
                  Link Sumber :
                </label>
                <input
                  placeholder="Masukkan Link Sumber Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="address"
                  value={currentNewsItem?.linkSumber || ""}
                  // onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-black" id="address">
                Sub Judul 1 :
              </label>
              <input
                placeholder="Masukkan Kategori Berita"
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.sub_title1 || ""}
                // onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-4 mb-4">
              <label className="text-black" id="address">
                Paragraf 1 :
              </label>
              <textarea
                placeholder="Masukkan Info Berita"
                ref={textareaRef}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.paragraf1 || ""}
                onChange={(e) => {
                  handleChange(e);
                  // setOperasional(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="address">
                Sub Judul 2 :
              </label>
              <input
                placeholder="Masukkan Kategori Berita"
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.sub_title2 || ""}
                // onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-4 mb-4">
              <label className="text-black" id="address">
                Paragrah 2 :
              </label>
              <textarea
                placeholder="Masukkan Info Berita"
                ref={textareaRef}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.paragraf2 || ""}
                onChange={(e) => {
                  handleChange(e);
                  // setOperasional(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="address">
                Sub Judul :
              </label>
              <input
                placeholder="Masukkan Kategori Berita"
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.sub_title3 || ""}
                // onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-4 mb-4">
              <label className="text-black" id="address">
                Paragraf 3 :
              </label>
              <textarea
                placeholder="Masukkan Info Berita"
                ref={textareaRef}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
                value={currentNewsItem?.paragraf3 || ""}
                onChange={(e) => {
                  handleChange(e);
                  // setOperasional(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="flex w-full justify-between gap-3">
            <Popconfirm
              // key={index}
              title="Apakah Kamu Mau Hapus RFC?"
              description="Kalau dihapus tidak bisa dikembalikan lagi loh"
              // onConfirm={() => handleDelete(rfc.id)}
              // onCancel={cancel}
              okText="Iya Dong"
              cancelText="Gak Jadi Deh"
            >
              <button className="w-full mb-2 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-white hover:bg-red-600 transition-colors">
                Delete
              </button>
            </Popconfirm>
            <button className="w-full mb-2 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-white hover:bg-red-600 transition-colors">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
