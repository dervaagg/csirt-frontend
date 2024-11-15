import { useRef, useState, useEffect } from "react";
import { Descriptions } from "antd";
import axios from "axios";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function EditKontak() {
  const textareaRef = useRef();
  const [contact, setContact] = useState([]);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [operasional, setOperasional] = useState("");

  useEffect(() => {
    getContact();
    const refreshInterval = setInterval(() => {
      getContact();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getContact = async () => {
    const response = await axios.get("http://localhost:4001/contacts");
    setContact(response.data);
  };

  const updateContact = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("operasional", operasional);
    formData.append("disclaimer", disclaimer);
    try {
      await axios.patch("http://localhost:4001/contact/3", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAddress("");
      setPhone("");
      setEmail("");
      setOperasional("");
      setDisclaimer("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">KONTAK</h2>
      <Descriptions>
        {contact.map((contact) => (
          <>
            <Descriptions.Item label="Nomor Telephone">
              {contact.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{contact.email}</Descriptions.Item>
            <Descriptions.Item label="Alamat">
              {contact.address}
            </Descriptions.Item>
            <Descriptions.Item label="Jam Operasional">
              {contact.operasional}
            </Descriptions.Item>
            <Descriptions.Item label="Disclaimer">
              {contact.disclaimer}
            </Descriptions.Item>
          </>
        ))}
      </Descriptions>

      <h2 className="mt-4 text-base font-semibold">
        <InfoCircleOutlined /> Form Edit Kontak
      </h2>
      <form onSubmit={updateContact}>
        <div className="mt-4">
          <label className="text-black" id="name">
            Alamat
          </label>
          <input
            placeholder="Masukkan Alamat Lengkap"
            className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div className="mt-4">
          <label className="text-black" id="address">
            Nomor Telepon
          </label>
          <input
            placeholder="Masukkan Nomor Telepon"
            className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            id="address"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div className="mt-4">
          <label className="text-black" id="address">
            Email
          </label>
          <input
            placeholder="Masukkan Email"
            className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            id="address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mt-4 ">
          <label className="text-black" id="address">
            Jam Operasional
          </label>
          <textarea
            placeholder="Masukkan Waktu Operasional"
            ref={textareaRef}
            className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            id="address"
            value={operasional}
            onChange={(e) => {
              handleChange(e);
              setOperasional(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mt-3 mb-4">
          <label className="text-black" id="address">
            Disclaimer
          </label>
          <textarea
            placeholder="Masukkan Waktu Operasional"
            ref={textareaRef}
            className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
            id="address"
            value={disclaimer}
            onChange={(e) => {
              handleChange(e);
              setDisclaimer(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-transparent outline outline-1 font-bold p-2 px-10 rounded-lg bg-white hover:bg-blue-500 transition-colors"
            type="submit"
          >
            Perbarui
          </button>
        </div>
      </form>
    </div>
  );
}
