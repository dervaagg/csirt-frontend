import { rfcData } from "../data/datas"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function EditRFC() {
  return (
    <div className="flex flex-col min-h-full bg-white rounded-lg p-4 shadow-sm">
        <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Edit File RFC</h2>
        <div className="w-60 h-90 bg-zinc-300 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3">
          <div className="w-52 border-dashed rounded-2xl">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Dragger>

          <div className="mt-1 w-full flex justify-center gap-4">        
            <button className="bg-black font-extrabold p-2 px-5 rounded-xl hover:bg-sky-700 transition-colors">Upload</button>
            <button className="bg-black font-extrabold p-2 px-5 rounded-xl hover:bg-sky-700 transition-colors">Delete</button>
          </div>
        </div>
      </div>
      <div className="mt-5 flex bg-zinc-300 rounded-lg p-4">
        {rfcData.map((items, index)=>(
          <object key={index} data={items.pdfRFC} type="application/pdf" width="100%" height="450px">
              <p>It appears you don`t have a PDF plugin for this browser. No biggie... you can 
              <a href={items.pdfRFC}>click here to download the PDF file.</a></p>
          </object>
        ))}
      </div>
    </div>
  )
}
