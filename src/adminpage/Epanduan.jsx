import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Epanduan = () => {
  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <div className="mt-4">
        <label className="text-black" id="name">
          Judul Panduan :{" "}
        </label>
        <input
          placeholder=""
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="name">
          Screenshoot Halaman Awal :{" "}
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="name">
          File PDF :{" "}
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>
    </div>
  );
};
export default Epanduan;
