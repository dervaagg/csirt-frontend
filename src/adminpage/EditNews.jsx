import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";
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

    const updateNews = async () => {

    };

    const setSelectedNews = (id) => {
        const newsItem = NewsViewData.find((item) => item.id === id);
        setCurrentNewsItem(newsItem);
    };

    const textareaRef = useRef();
    const [currentNewsItem, setCurrentNewsItem] = useState(null);

    const handleChange = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    return (
        <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
            <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Edit Berita</h2>
            <div className="flex mt-5 max-h-full">
                <div className="flex flex-col mr-6">
                    {NewsViewData.map((items, index) => (
                        <ul key={index} className="list-none grid pb-2">
                            <li
                                className={`flex items-center w-full h-16 rounded-l-full text-base ${currentNewsItem?.id === items.id
                                        ? "bg-zinc-500 text-white"
                                        : ""
                                    }`}
                            >
                                <Link
                                    className="ml-5 font-semibold hover:text-zinc-500 w-full"
                                    onClick={() => setSelectedNews(items.id)}
                                >
                                    {items.title}
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
