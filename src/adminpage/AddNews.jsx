import { useState, useEffect, useRef } from "react";
import { Modal, Space, Alert } from "antd";
import axios from "axios";
import { Card, Button } from "antd";
import { BiLinkExternal } from "react-icons/bi";
import { PlusCircleOutlined } from "@ant-design/icons";

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
  const [errorAlert, setErrorAlert] = useState(null);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  useEffect(() => {
    getNews();
    const refreshInterval = setInterval(() => {
      getNews();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const createNews = async (e) => {
    if (e) {
      e.preventDefault();
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

      // formData.append("title", title);
      // formData.append("category", category);
      // formData.append("content", content);
      // formData.append("source", source);
      // formData.append("date", date);
      // formData.append("image", file);

      await axios.post("http://localhost:4001/news", formData, {
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

  const createContents = async (e) => {
    if (e) {
      e.preventDefault();
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
      await axios.post("http://localhost:4001/content", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSub_title1("");
      setParagraph1("");
      setSub_title2("");
      setParagraph2("");
      setSub_title3("");
      setParagraph3("");
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

  const getNews = async () => {
    const response = await axios.get("http://localhost:4001/newses");
    setNewses(response.data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    await createNews();
    await createContents();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    // SECTION TAMBAH BERITA
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">TAMBAH BERITA</h2>
      <div className="mb-6 text-neutral-300">
        <Button
          onClick={showModal}
          type="primary"
          icon={<PlusCircleOutlined />}
          style={{
            border: "1px solid black",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Tambah
        </Button>
      </div>
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
      <br />
      {/* SECTION TAMPILKAN LIST BERITA  */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {newses.map((news, index) => (
          <div key={index} className="mb-4 flex flex-col items-center">
            <Card
              style={{ width: 300 }}
              title={news.title}
              extra={
                <a
                  className=""
                  href={news.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    <BiLinkExternal />
                  </div>
                </a>
              }
            >
              <img
                alt="picture"
                src={news.url}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <br />
              <p>
                <strong>Tanggal :</strong> <br />
                {news.date}
              </p>
              <p>
                <strong>Berita Singkat :</strong> <br /> {news.content}
              </p>
              <p>
                <strong>Kategori :</strong> <br /> {news.category}
              </p>
            </Card>
          </div>
        ))}
      </div>

      {/* MODAL TAMBAH BERITA */}
      <Modal
        title="Berita"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
          <form onSubmit={createNews}>
            <div className="mt-4">
              <label className="text-black" id="title">
                Judul :
              </label>
              <input
                placeholder="contoh : Berita Terkini"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={title}
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
              <label className="text-black" id="source">
                Sumber Berita :
              </label>
              <input
                placeholder="contoh : www.contoh.com"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="date">
                Tanggal Upload {"(Penerbit Mengupload Berita)"} :
              </label>
              <input
                placeholder="contoh : 1 Januari 2024"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="category">
                Kategori :
              </label>
              <input
                placeholder="contoh : Malware"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-black" id="name">
                Sinopsis :
              </label>
              <textarea
                placeholder="Ringkasan Singkat Tentang Berita"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </form>
          <br />
          <form onSubmit={createContents}>
            <div className="flex flex-col gap-4">
              <label className="text-black" id="isi-berita">
                Isi Berita :
              </label>
              <input
                placeholder="Sub Judul 1"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={sub_title1}
                onChange={(e) => setSub_title1(e.target.value)}
              ></input>
              <textarea
                placeholder="Paragraf 1"
                ref={textareaRef}
                onChange={(e) => {
                  handleChange(e);
                  setParagraph1(e.target.value);
                }}
                value={paragraph1}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="paragraph1"
              ></textarea>
              <input
                placeholder="Sub Judul 2 (Opsional)"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={sub_title2}
                onChange={(e) => setSub_title2(e.target.value)}
              ></input>
              <textarea
                placeholder="Paragraf 2 (Opsional)"
                ref={textareaRef}
                value={paragraph2}
                onChange={(e) => {
                  handleChange(e);
                  setParagraph2(e.target.value);
                }}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="paragraph2"
              ></textarea>
              <input
                placeholder="Sub Judul 3 (Opsional)"
                className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
                value={sub_title3}
                onChange={(e) => setSub_title3(e.target.value)}
              ></input>
              <textarea
                placeholder="Paragraf 3 (Opsional)"
                ref={textareaRef}
                value={paragraph3}
                onChange={(e) => {
                  handleChange(e);
                  setParagraph3(e.target.value);
                }}
                className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                id="address"
              ></textarea>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
