import { useState, useEffect } from "react";
import { Space, Alert, Descriptions, Image } from "antd";
import { useRef } from "react";
import axios from "axios";

export default function EditNews() {
  const textareaRef = useRef();
  const [newses, setNewses] = useState([]);
  const [contents, setContents] = useState([]);
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
  const [errorAlert, setErrorAlert] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null); // Track selected news ID or title
  const [selectedContent, setSelectedContent] = useState(null);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  // NEWS FUNCTION
  useEffect(() => {
    getNewses();
    const refreshInterval = setInterval(() => {
      getNewses();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getNewses = async () => {
    const response = await axios.get("http://localhost:4001/newses");
    setNewses(response.data);
  };

  const updateNews = async () => {
    if (!selectedNews) {
      setErrorAlert({
        type: "error",
        message: "Please select a news first.",
      });
      return;
    }
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
      await axios.patch(
        `http://localhost:4001/news/${selectedNews}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTitle("");
      setCategory("");
      setContent("");
      setSource("");
      setDate("");
      setFile("");
      setPreview("");
      setSelectedNews(null);
    } catch (error) {
      console.error("Error submitting news form:", error.message);
    }
  };

  const handleNewsSelect = (newsId) => {
    setSelectedNews(newsId);
    setSelectedContent(null); // Deselect content when selecting news
    // Fetch and set the details for the selected news (e.g., using newsId)
  };

  // CONTENT FUNCTION
  useEffect(() => {
    getContents();
    const refreshInterval = setInterval(() => {
      getContents();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, [contents]);

  const getContents = async () => {
    const response = await axios.get("http://localhost:4001/contents");
    setContents(response.data);
  };

  const updateContent = async () => {
    if (!selectedContent) {
      setErrorAlert({
        type: "error",
        message: "Please select a content item first.",
      });
      return;
    }
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
        `http://localhost:4001/content/${selectedContent}`,
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
      setSelectedContent(null);
    } catch (error) {
      console.log(error);
    }
    console.log("Submitting content form:", {
      sub_title1,
      paragraph1,
      sub_title2,
      paragraph2,
      sub_title3,
      paragraph3,
    });
  };

  const handleContentSelect = (contentId) => {
    setSelectedContent(contentId);
    setSelectedNews(null); // Deselect news when selecting content
    // Fetch and set the details for the selected content (e.g., using contentId)
  };

  // GENERAL FUNCTION
  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    // SECTION EDIT BERITA
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">EDIT BERITA</h2>
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
      <div>
        <h2 className="mt-4 mb-5 text-black font-bold text-xl">
          Select News and Content
        </h2>
        <div>
          <h3 className="text-black text-xl">Select News :</h3>
          {newses.map((news) => (
            <div key={news.id}>
              <button onClick={() => handleNewsSelect(news.id)}>
                {news.title}
              </button>

              {news.contents &&
                news.contents.map((content) => (
                  <div key={content.id}>
                    <button onClick={() => handleContentSelect(content.id)}>
                      {content.title}
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION DETAILS */}
      {selectedNews && (
        <div>
          {/* Code for displaying selected news details */}
          <Image
            label="Gambar"
            className="rounded-md"
            width={150}
            src={selectedNews.url}
          />
          <Descriptions>
            <Descriptions.Item label="Judul">
              {selectedNews.title}
            </Descriptions.Item>
            <Descriptions.Item label="Kategori">
              {selectedNews.category}
            </Descriptions.Item>
            <Descriptions.Item label="Sumber Berita">
              {selectedNews.source}
            </Descriptions.Item>
            <Descriptions.Item label="Tanggal Upload">
              {selectedNews.date}
            </Descriptions.Item>
            <Descriptions.Item label="Sinopsis">
              {selectedNews.content}
            </Descriptions.Item>
            <Descriptions.Item label="Sub Judul 1">
              {content.title}
            </Descriptions.Item>
            <Descriptions.Item label="Paragraf 1">
              {content.category}
            </Descriptions.Item>
            <Descriptions.Item label="Sub Judul 2">
              {content.source}
            </Descriptions.Item>
            <Descriptions.Item label="Paragraf 2">
              {content.date}
            </Descriptions.Item>
            <Descriptions.Item label="Sub Judul 3">
              {content.content}
            </Descriptions.Item>
            <Descriptions.Item label="Paragraf 3">
              {content.content}
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}

      {/* SECTION EDITING */}
      {selectedNews && (
        <>
          {/* Code for editing news */}
          <h1 className="mt-3 mb-1 text-black text-xl">Edit Berita</h1>
          <form onSubmit={updateNews}>
            <div className="mt-4">
              <label className="text-black" id="name">
                Judul :
              </label>
              <input
                placeholder="Masukkan Nama Profil"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
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
              <label className="text-black" id="name">
                Kategori :
              </label>
              <input
                placeholder="Masukan Deskripsi Profil"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Sumber Berita :
              </label>
              <input
                placeholder="Masukan Deskripsi Profil"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Tanggal Upload :
              </label>
              <input
                placeholder="Masukan Deskripsi Profil"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Sinopsis :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={content}
                onChange={(e) => {
                  handleChange(e);
                  setContent(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-black text-white rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
                type="submit"
              >
                Update Deskripsi Berita
              </button>
            </div>
          </form>
        </>
      )}

      {/* EDIT SECTION */}
      {selectedContent && (
        <>
          {/* Code for editing content */}
          <h1 className="mt-3 mb-1 text-black text-xl">Edit Content</h1>
          <form onSubmit={updateContent}>
            <div className="mt-4">
              <label className="text-black" id="name">
                Sub Judul 1 :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={sub_title1}
                onChange={(e) => {
                  handleChange(e);
                  setSub_title1(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Paragraf 1 :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={paragraph1}
                onChange={(e) => {
                  handleChange(e);
                  setParagraph1(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Sub Judul 2 :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={sub_title2}
                onChange={(e) => {
                  handleChange(e);
                  setSub_title2(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Paragraf 2 :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={paragraph2}
                onChange={(e) => {
                  handleChange(e);
                  setParagraph2(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Sub Judul 3 :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={sub_title3}
                onChange={(e) => {
                  handleChange(e);
                  setSub_title3(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Paragraf 3 :
              </label>
              <textarea
                placeholder="Masukan Deskripsi Profil"
                ref={textareaRef}
                value={paragraph3}
                onChange={(e) => {
                  handleChange(e);
                  setParagraph3(e.target.value);
                }}
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1 mt-2"
                type="text"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-black text-white rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
                type="submit"
              >
                Update Paragraf Berita
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
