import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";

export default function EditNews() {
  const textareaRef = useRef();
  const [newses, setNewses] = useState([]);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    source: "",
    date: "",
    file: "",
    preview: "",
    sub_title1: "",
    paragraph1: "",
    sub_title2: "",
    paragraph2: "",
    sub_title3: "",
    paragraph3: "",
  });

  const cancel = (e) => {
    console.log(e);
    message.error("Batal Menghapus");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFormData({
      ...formData,
      file: image,
      preview: URL.createObjectURL(image),
    });
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
      message.success("Berita berhasil dihapus.");
    } catch (error) {
      console.error("Error deleting news:", error.message);
    }
  };

  const updateNews = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4001/news/${selectedNewsId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Berita berhasil diperbarui.");
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
      setFormData({
        title: selectedNewsData.title,
        category: selectedNewsData.category,
        content: selectedNewsData.content,
        source: selectedNewsData.source,
        date: selectedNewsData.date,
        file: selectedNewsData.image,
        preview: selectedNewsData.url,
        sub_title1: selectedNewsData.sub_title1,
        paragraph1: selectedNewsData.paragraph1,
        sub_title2: selectedNewsData.sub_title2,
        paragraph2: selectedNewsData.paragraph2,
        sub_title3: selectedNewsData.sub_title3,
        paragraph3: selectedNewsData.paragraph3,
      });
    } catch (error) {
      console.error("Error fetching selected news data:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">EDIT BERITA</h2>
      <div className="flex flex-col mt-5 max-h-full">
        <h2 className="mb-6 text-base font-semibold">
          <InfoCircleOutlined /> Klik Pada Judul Berita Untuk Mengedit
        </h2>
        <div className="mb-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-black uppercase bg-zinc-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
              </tr>
            </thead>
            <tbody className="capitalize">
              {newses.map((news) => (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-b"
                  key={news.id}
                >
                  <td className="px-6 py-4">
                    <Popconfirm
                      title="Yakin Ingin Hapus Berita Ini?"
                      description="Jika dihapus, berita tidak dapat dikembalikan lagi."
                      onConfirm={() => deleteNews(news.id)}
                      onCancel={cancel}
                      okText="Iya"
                      cancelText="Tidak"
                    >
                      <button className="bin-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 39 7"
                          className="bin-top"
                        >
                          <line
                            strokeWidth="4"
                            stroke="white"
                            y2="5"
                            x2="39"
                            y1="5"
                          ></line>
                          <line
                            strokeWidth="3"
                            stroke="white"
                            y2="1.5"
                            x2="26.0357"
                            y1="1.5"
                            x1="12"
                          ></line>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 33 39"
                          className="bin-bottom"
                        >
                          <mask fill="white" id="path-1-inside-1_8_19">
                            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                          </mask>
                          <path
                            mask="url(#path-1-inside-1_8_19)"
                            fill="white"
                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                          ></path>
                          <path
                            strokeWidth="4"
                            stroke="white"
                            d="M12 6L12 29"
                          ></path>
                          <path
                            strokeWidth="4"
                            stroke="white"
                            d="M21 6V29"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 89 80"
                          className="garbage"
                        >
                          <path
                            fill="white"
                            d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                          ></path>
                        </svg>
                      </button>
                    </Popconfirm>
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    <Link
                      className="underline decoration-sky-400 font-semibold hover:text-black max-w-50"
                      onClick={() => handleNewsClick(news.id)}
                    >
                      {news.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-4 text-base font-semibold">
          <InfoCircleOutlined /> Form Edit News
        </h2>
        <div className="flex flex-col-reverse justify-center w-full h-full mb-5">
          <form onSubmit={updateNews}>
            <div className="w-full h-full">
              <div className="mt-4">
                <label className="text-black" htmlFor="title">
                  Judul :
                </label>
                <input
                  placeholder="Masukkan Judul Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
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
                {formData.preview && (
                  <figure className="w-32 h-32">
                    <img
                      src={formData.preview}
                      alt="preview"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </figure>
                )}
              </div>
              <div className="mt-4">
                <label className="text-black" htmlFor="category">
                  Kategori :
                </label>
                <input
                  placeholder="Masukkan Kategori Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" htmlFor="content">
                  Ringkasan Berita :
                </label>
                <textarea
                  placeholder="Masukkan Informasi Singkat Mengenai Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex w-full justify-between gap-6">
                <div className="grid w-full">
                  <label className="text-black" htmlFor="date">
                    Tanggal Dibuat :
                  </label>
                  <input
                    placeholder="Masukkan Tanggal Dibuatnya Berita"
                    className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="grid w-full">
                  <label className="text-black" htmlFor="source">
                    Link Berita :
                  </label>
                  <input
                    placeholder="Masukkan Link Sumber Berita"
                    className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-black" htmlFor="subtitle1">
                  Sub Judul 1 :
                </label>
                <input
                  placeholder="Masukkan Judul 1 Dari Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="subtitle1"
                  name="sub_title1"
                  value={formData.sub_title1}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" htmlFor="paragraph1">
                  Paragraf 1 :
                </label>
                <textarea
                  placeholder="Masukkan Paragraf 1 Dari Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="paragraph1"
                  name="paragraph1"
                  value={formData.paragraph1}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="text-black" htmlFor="subtitle2">
                  Sub Judul 2 :
                </label>
                <input
                  placeholder="Masukkan Judul 2 Dari Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="subtitle2"
                  name="sub_title2"
                  value={formData.sub_title2}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" htmlFor="paragraph2">
                  Paragrah 2 :
                </label>
                <textarea
                  placeholder="Masukkan Paragraf 2 Dari Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="paragraph2"
                  name="paragraph2"
                  value={formData.paragraph2}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="text-black" htmlFor="subtitle3">
                  Sub Judul 3 :
                </label>
                <input
                  placeholder="Masukkan Judul 3 Dari Berita"
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="subtitle3"
                  name="sub_title3"
                  value={formData.sub_title3}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-4 mb-4">
                <label className="text-black" htmlFor="paragraph3">
                  Paragraf 3 :
                </label>
                <textarea
                  placeholder="Masukkan Paragraf 3 Dari Berita"
                  ref={textareaRef}
                  className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
                  id="paragraph3"
                  name="paragraph3"
                  value={formData.paragraph3}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="mb-2 bg-transparent outline outline-1 font-bold p-2 px-10 rounded-lg bg-white hover:bg-blue-500 transition-colors"
                  type="submit"
                  disabled={!selectedNewsId}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
