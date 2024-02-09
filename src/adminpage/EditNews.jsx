import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { useRef } from "react";
import { DeleteOutlined } from "@ant-design/icons";

export default function EditNews() {
  const textareaRef = useRef();
  const [newses, setNewses] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [sub_title1, setSub_title1] = useState("");
  const [paragraph1, setParagraph1] = useState("");
  const [sub_title2, setSub_title2] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [sub_title3, setSub_title3] = useState("");
  const [paragraph3, setParagraph3] = useState("");
  const [selectedNewsId, setSelectedNewsId] = useState([]);

  const cancel = (e) => {
    console.log(e);
    message.error("Batal Menghapus");
  };

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

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

  const getNewses = async () => {
    try {
      const response = await axios.get("http://localhost:4001/newses");
      setNewses(response.data);
    } catch (error) {
      console.error(error);
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

  const updateNews = async (newsId) => {
    newsId.preventDefault();
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
      await axios.patch(`http://localhost:4001/news/${id}`, formData, {
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
      setSub_title1("");
      setParagraph1("");
      setSub_title2("");
      setParagraph2("");
      setSub_title3("");
      setParagraph3("");
    } catch (error) {
      console.error("Error submitting news form:", error.message);
    }
  };

  const handleNewsClick = async (newsId) => {
    setSelectedNewsId(newsId);
    try {
      const newsResponse = await axios.get(
        `http://localhost:4001/news/${newsId}`
      );
      const selectedNewsData = newsResponse.data;
      setTitle(selectedNewsData.title);
      setCategory(selectedNewsData.category);
      setContent(selectedNewsData.content);
      setSource(selectedNewsData.source);
      setDate(selectedNewsData.date);
      setFile(selectedNewsData.image);
      setPreview(selectedNewsData.url);
      setSub_title1(selectedNewsData.sub_title1);
      setParagraph1(selectedNewsData.paragraph1);
      setSub_title2(selectedNewsData.sub_title2);
      setParagraph2(selectedNewsData.paragraph2);
      setSub_title3(selectedNewsData.sub_title3);
      setParagraph3(selectedNewsData.paragraph3);
    } catch (error) {
      console.error("Error fetching selected news data:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">EDIT BERITA</h2>
      <div className="flex mt-5 max-h-full">
        <div className="flex flex-col mr-6 min-w-3.5">
          {newses.map((news, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between max-w-full h-16 rounded-l-full text-base">
                <Link
                  className=" font-semibold hover:text-black max-w-50"
                  onClick={() => handleNewsClick(news.id)}
                >
                  {news.title}
                </Link>
                {selectedNewsId === news.id && (
                  <Popconfirm
                    title="Apakah Kamu Mau Hapus Berita Ini?"
                    description="Kalau dihapus tidak bisa dikembalikan lagi loh"
                    onConfirm={() => deleteNews(news.id)}
                    onCancel={cancel}
                    okText="Iya Dong"
                    cancelText="Gak Jadi Deh"
                  >
                    <button className="mr-4 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-red-600 hover:bg-red-400 transition-colors">
                      <DeleteOutlined />
                    </button>
                  </Popconfirm>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col-reverse justify-center w-full">
          <form onSubmit={updateNews}>
            <div className="w-full h-full">
              <div className="mt-4">
                <label className="text-black" id="title">
                  Judul :
                </label>
                <input
                  placeholder="Masukkan Judul Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="title"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
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
              <div className="mt-4">
                <label className="text-black" id="category">
                  Kategori :
                </label>
                <input
                  placeholder="Masukkan Kategori Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="category"
                  value={category || ""}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" id="content">
                  Deskripsi Berita :
                </label>
                <textarea
                  placeholder="Masukkan Info Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="content"
                  value={content || ""}
                  onChange={(e) => {
                    handleChange(e);
                    setContent(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="flex w-full justify-between gap-6">
                <div className="grid w-full">
                  <label className="text-black" id="date">
                    Tanggal Dibuat :
                  </label>
                  <input
                    placeholder="Masukkan Tanggal Dibuatnya Berita"
                    className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                    id="date"
                    value={date || ""}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </div>
                <div className="grid w-full">
                  <label className="text-black" id="source">
                    Link Berita :
                  </label>
                  <input
                    placeholder="Masukkan Link Sumber Berita"
                    className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                    id="source"
                    value={source || ""}
                    onChange={(e) => setSource(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-black" id="subtitle1">
                  Sub Judul 1 :
                </label>
                <input
                  placeholder="Masukkan Kategori Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="subtitle1"
                  value={sub_title1 || ""}
                  onChange={(e) => setSub_title1(e.target.value)}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" id="paragraph1">
                  Paragraf 1 :
                </label>
                <textarea
                  placeholder="Masukkan Info Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="paragraph1"
                  value={paragraph1 || ""}
                  onChange={(e) => {
                    handleChange(e);
                    setParagraph1(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="text-black" id="subtitle2">
                  Sub Judul 2 :
                </label>
                <input
                  placeholder="Masukkan Kategori Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="subtitle2"
                  value={sub_title2 || ""}
                  onChange={(e) => setSub_title2(e.target.value)}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" id="paragraph2">
                  Paragrah 2 :
                </label>
                <textarea
                  placeholder="Masukkan Info Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="paragraph2"
                  value={paragraph2 || ""}
                  onChange={(e) => {
                    handleChange(e);
                    setParagraph2(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="text-black" id="subtitle3">
                  Sub Judul 3 :
                </label>
                <input
                  placeholder="Masukkan Kategori Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="subtitle3"
                  value={sub_title3 || ""}
                  onChange={(e) => setSub_title3(e.target.value)}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" id="paragraph3">
                  Paragraf 3 :
                </label>
                <textarea
                  placeholder="Masukkan Info Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="paragraph3"
                  value={paragraph3 || ""}
                  onChange={(e) => {
                    handleChange(e);
                    setParagraph3(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                className="w-full mb-2 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-white hover:bg-red-600 transition-colors"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
