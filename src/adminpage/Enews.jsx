import { useRef } from "react";
import { Button, Upload, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function Enews() {
  const textareaRef = useRef();

  const handleChange = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Cover :{" "}
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Banner :
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Tanggal Upload :{" "}
        </label>
        <div>
          <DatePicker renderExtraFooter={() => "extra footer"} />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-black" id="name">
          Source :
        </label>
        <input
          placeholder=""
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-4">
        <label className="text-black" id="name">
          Judul :
        </label>
        <input
          placeholder=""
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-4 mb-4">
        <label className="text-black" id="address">
          Isi Konten :{" "}
        </label>
        <textarea
          placeholder=""
          ref={textareaRef}
          onChange={handleChange}
          className="w-full bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          id="address"
        ></textarea>
      </div>
    </div>
  );
}