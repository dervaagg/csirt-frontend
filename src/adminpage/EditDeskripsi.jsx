import { useRef } from "react";
import { Upload, Button, Image, Descriptions } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function EditProfile() {
  const textareaRef = useRef();

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const formItems = [
    {
      key: "Tentang",
      label: "Tentang",
      children: "",
    },
  ];

  return (
    <div className="lex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">DESKRIPSI</h2>

      <Image
        className="rounded-md"
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <br />
      <br />
      <Descriptions items={formItems} />

      <h1 className="mt-3 mb-1 text-black text-xl">Edit Deskripsi</h1>
      <div className="mt-4">
        <label className="text-black" id="name">
          Tentang :{" "}
        </label>
        <textarea
          placeholder=""
          ref={textareaRef}
          onChange={handleChange}
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></textarea>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Image :{" "}
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
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
