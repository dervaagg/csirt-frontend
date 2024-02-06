import { useState } from 'react'
import { PanduanData } from "../data/datas"
import { Link } from 'react-router-dom';
import { Popconfirm} from "antd";

export default function EditPanduan() {

  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">List Panduan</h2>    
      <div className="flex mt-5 max-h-full">
        <div className="flex flex-col mr-6">
          {PanduanData.DataPanduan.map((items, index)=>(
              <ul key={index} className="list-none grid pb-2">
                  <li className={`flex items-center w-full h-16 rounded-l-full text-base ${selectedPdf === items.filePdf ? 'bg-zinc-500 text-white' : ''}`}>
                    <Link className="ml-5 font-semibold hover:text-zinc-500 w-full" onClick={() => setSelectedPdf(items.filePdf)}>{items.title}</Link>
                  </li>
              </ul>
          ))}
        </div>
        <div className="flex flex-col-reverse justify-center w-full">
          <object data={selectedPdf} type="application/pdf" width="100%" height="100%">
            <p>Sepertinya browser anda tidak mempunyai plugin pdf, tapi tenang, anda bisa 
              <a href={selectedPdf} download={selectedPdf}> klik disini</a> untuk mendownload file PDF-nya</p>
          </object>
          <Popconfirm
              // key={index}
              title="Apakah Kamu Mau Hapus RFC?"
              description="Kalau dihapus tidak bisa dikembalikan lagi loh"
              // onConfirm={() => handleDelete(rfc.id)}
              // onCancel={cancel}
              okText="Iya Dong"
              cancelText="Gak Jadi Deh"
            >
              <button className="mb-2 bg-transparent outline outline-1 font-bold p-2 px-2 rounded-lg bg-white hover:bg-red-600 transition-colors">
                Delete
              </button>
            </Popconfirm>
        </div>
      </div>
    </div>
  )
}
