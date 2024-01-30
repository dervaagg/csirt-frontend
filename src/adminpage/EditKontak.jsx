import { useRef } from "react";

export default function EditKontak() {
  const textareaRef = useRef();

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Kontak</h2>

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
