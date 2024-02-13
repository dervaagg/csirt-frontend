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
          <InfoCircleOutlined /> Klik Salah Satu Judul Dan Data Akan Keluar
          Dibagian Form Edit
        </h2>
        <div className="mb-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-black uppercase bg-zinc-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nomor
                </th>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="capitalize">
              {newses.map((news, index) => (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-b"
                  key={news.id}
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
                    <Link
                      className=" font-semibold hover:text-black max-w-50"
                      onClick={() => handleNewsClick(news.id)}
                    >
                      {news.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Popconfirm
                      title="Yakin Ingin Hapus Dokumen Panduan Ini?"
                      description="Jika di hapus tidak bisa dikembalikan lagi yaa"
                      onConfirm={() => deleteNews(news.id)}
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
