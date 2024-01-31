import { useRef } from "react";
import { Descriptions } from "antd";

export default function EditKontak() {
  const textareaRef = useRef();

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const formItems = [
    {
      key: "1",
      label: "Alamat",
      children: "",
    },
    {
      key: "2",
      label: "Nomor Telephone",
      children: "",
    },
    {
      key: "3",
      label: "Email",
      children: "",
    },
    {
      key: "4",
      label: "Jam Operasional",
      children: "",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">KONTAK</h2>

      <Descriptions items={formItems} />

      <br />
      <h1 className="mt-3 mb-1 text-black text-2xl" >Edit Kontak</h1>
      <div className="mt-4">
        <label className="text-black" id="name">
          Alamat
        </label>
        <input
          placeholder=""
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-4">
        <label className="text-black" id="address">
          Nomor Telephone
        </label>
        <input
          placeholder=""
          className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          id="address"
        ></input>
      </div>

      <div className="mt-4">
        <label className="text-black" id="address">
          Email
        </label>
        <input
          placeholder=""
          className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          id="address"
        ></input>
      </div>

      <div className="mt-4 mb-4">
        <label className="text-black" id="address">
          Jam Operasional
        </label>
        <textarea
          placeholder=""
          ref={textareaRef}
          onChange={handleChange}
          className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          id="address"
        ></textarea>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="bg-black text-white rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
