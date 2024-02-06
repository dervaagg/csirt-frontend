import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Space } from "antd";
import EditPanduan from "./EditPanduan";

export default function AddPanduan() {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };
  // const props = {
  //   onRemove: (file) => {
  //     const index = fileList.indexOf(file);
  //     const newFileList = fileList.slice();
  //     newFileList.splice(index, 1);
  //     setFileList(newFileList);
  //   },
  //   beforeUpload: (file) => {
  //     setFileList([...fileList, file]);
  //     return false;
  //   },
  //   fileList,
  // };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Tambah Panduan</h2>

      <div className="mt-4">
        <label className="text-black" id="name">
          Judul Panduan :
        </label>
        <input
          placeholder=""
          className="mt-5 w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
          size="large"
        >
          <label className="text-black">
            Gambar Cover :
          </label>
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture"
          >
            <Button className="px-10" icon={<UploadOutlined />}>Pilih File</Button>
          </Upload>
          <label className="text-black">
            File PDF :
          </label>
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture"
            multiple
          >
            <Button className="px-10" icon={<UploadOutlined />}>Pilih File</Button>
          </Upload>
        </Space>
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{
            marginTop: 16,
          }}
        >
          {uploading ? "Uploading" : "Upload"}
        </Button>
      </div>
      <EditPanduan />
    </div>
  );
}