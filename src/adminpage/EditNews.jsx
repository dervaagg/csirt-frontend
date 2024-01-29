import { useState } from 'react';
import { Modal, message, Popconfirm } from 'antd';
import Enews from './Enews';

const confirm = (e) => {
  console.log(e);
  message.success('Berhasil Menghapus');
};
const cancel = (e) => {
  console.log(e);
  message.error('Batal Menghapus');
};

const EditNews = () => {

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
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Edit Berita</h2>
      <div className="mb-6 text-neutral-300">        
        <button className="bg-black font-extrabold p-2 px-8 rounded-xl hover:bg-sky-700 transition-colors" type="primary" onClick={showModal}>
          Tambah Berita
        </button>
      </div>
      <div className="w-60 h-80 bg-zinc-300 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-5">
        <div className="w-52 h-44 bg-sky-700 rounded-2xl">

        </div>
        <div className="text-black">
            <p className="font-extrabold">Judul Berita</p>
        </div>
        <div className="mt-1 flex gap-3">        
          <button className="bg-black font-extrabold p-2 px-8 rounded-xl hover:bg-sky-700 transition-colors" onClick={showModal}>Edit</button>
          <Popconfirm
            title="Hapus Berita"
            description="Yakin Dihapus?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Ya"
            cancelText="Tidak"
          >
            <button className="bg-black font-extrabold p-2 px-8 rounded-xl hover:bg-sky-700 transition-colors">Delete</button>
          </Popconfirm>
        </div>
        <Modal title="Berita" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Enews />
        </Modal>
      </div>
    </div>
  )
}
export default EditNews;
