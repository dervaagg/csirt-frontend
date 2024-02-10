import { InboxOutlined } from "@ant-design/icons";
import { message, Popconfirm, Upload } from "antd";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

export default function EditRFC() {
  const [fileList, setFileList] = useState([]);
  const { Dragger } = Upload;
  const editRFCRef = useRef(null);

  useEffect(() => {
    getRFC();
  }, []);

  const getRFC = async () => {
    try {
      const response = await axios.get("http://localhost:4001/rfc");
      setFileList(response.data);
    } catch (error) {
      console.error("Error loading RFC", error.message);
    }
  };

  const handleUpload = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:4001/rfc", formData);
      message.success(`${file.name} Uploaded Successfully.`);
      getRFC();
      onSuccess();
      scrollToBottom();
    } catch (error) {
      message.error(`${file.name} file upload failed.`);
      console.error("Error uploading RFC file", error.message);
      onError();
    }
  };

  const handleDelete = async (rfcId) => {
    try {
      await axios.delete(`http://localhost:4001/rfc/${rfcId}`);
      message.success("RFC deleted successfully.");
      getRFC();
    } catch (error) {
      message.error("Error deleting RFC file");
    }
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Batal Menghapus");
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} uploaded Successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} Upload Failed.`);
      }
      if (info.file.status === "done" || info.file.status === "error") {
        getRFC();
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 ref={editRFCRef} className="mt-4 mb-5 text-black font-bold text-3xl">
        RFC 2350
      </h2>
      <div className="w-60 h-90 bg-zinc-300 rounded-3xl text-neutral- p-4 flex flex-col items-start justify-center gap-3">
        <div className="w-52 border-dashed rounded-2xl">
          <Dragger {...props} customRequest={handleUpload}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Klik atau seret dokumen kesini untuk upload.
            </p>
            <p className="ant-upload-hint">
              Ketika memilih dokumen akan langsung ter upload disini.
            </p>
          </Dragger>
        </div>
      </div>

      <br />
      <h1 className="mt-3 mb-1 text-black text-xl">Edit RFC 2350</h1>
      <div className="mt-2 flex flex-col-reverse bg-zinc-300 rounded-lg p-4">
        {fileList.map((rfc, index) => (
          <React.Fragment key={index}>
            <object
              data={rfc.url}
              type="application/pdf"
              width="100%"
              height="800px"
              style={{
                marginBottom: "20px",
                borderRadius: "5px",
                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 3)",
              }}
            >
              <p>
                Dokumen hanya bisa di tampilkan pada Mode Desktop saja. Tidak
                bisa pada Mode Mobile.
              </p>
            </object>
            <Popconfirm
              key={index}
              title="Apakah Kamu Mau Hapus RFC?"
              description="Kalau dihapus tidak bisa dikembalikan lagi loh"
              onConfirm={() => handleDelete(rfc.id)}
              onCancel={cancel}
              okText="Iya Dong"
              cancelText="Gak Jadi Deh"
            >
              <button className="mb-7 bg-transparent outline-double text-black font-extrabold p-2 px-2 rounded-xl hover:bg-red-500 transition-colors flex-row-reverse">
                Delete
              </button>
            </Popconfirm>
          </React.Fragment>
        ))}
      </div>
      <br />
    </div>
  );
}
