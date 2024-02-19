import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAccess } from '../UI/AdminAccessContext';
import { IoPersonCircle } from "react-icons/io5";

export default function Admin() {
  const { setHasAccess } = useAdminAccess();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setHasAccess(true);
    navigate('/admin/dashboard');
  };

  return (
      <div className='flex justify-center items-center w-screen h-screen bg-[url("/src/assets/bg-admin.png")] bg-cover bg-center'>
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white z-1 shadow-2xl outline outline-1">
          <div className="text-2xl font-bold text-blue-950 text-center">Selamat Datang Di Halaman<br/><span className="text-blue-800">Admin CSIRT</span></div>
          <div className="mt-6 mb-6 flex justify-center"><IoPersonCircle className="w-32 h-32 text-blue-950"/></div>
          <div className="text-sm font-normal mb-6 text-center text-black">Klik Tombol Login Untuk Mengakses<br/> Halaman Dashboard</div>
          <button
            type="submit"
            className="mb-4 bg-blue-700 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            onClick={handleButtonClick}
            disabled={isButtonClicked}
          >
            {isButtonClicked ? 'Redirecting...' : 'Login'}
          </button>
        </div>
      </div>
  );
}
