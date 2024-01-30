import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm, Upload, Modal } from "antd";
import Epanduan from "./Epanduan";

const confirm = (e) => {
  console.log(e);
  message.success("Berhasil Menghapus");
};
const cancel = (e) => {
  console.log(e);
  message.error("Batal Menghapus");
};

const EditPanduan = () => {
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
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Panduan</h2>

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
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="name">
          File PDF :{" "}
        </label>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
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
      <div className="w-60 h-80 bg-zinc-300 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-5">
        <div className="w-52 h-44 bg-sky-700 rounded-2xl"></div>
        <div className="text-black">
          <p className="font-extrabold">Judul Panduan</p>
        </div>
        <div className="mt-1 flex gap-3">
          <button
            className="bg-black font-extrabold p-2 px-8 rounded-xl hover:bg-sky-700 transition-colors"
            onClick={showModal}
          >
            Edit
          </button>
          <Popconfirm
            title="Hapus Panduan"
            description="Yakin Dihapus?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Ya"
            cancelText="Tidak"
          >
            <button className="bg-black font-extrabold p-2 px-8 rounded-xl hover:bg-sky-700 transition-colors">
              Delete
            </button>
          </Popconfirm>
        </div>
      </div>
      <Modal
        title="Panduan"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Epanduan />
      </Modal>
    </div>
  );
};
export default EditPanduan;
