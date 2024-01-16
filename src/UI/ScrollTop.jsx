import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Loader.css'

export default function ScrollTop() {
  const { pathname } = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
      setShowLoader(true);
      window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
      if (showLoader) {
        const timer = setTimeout(() => {
          setShowLoader(false);
        }, 600); // Adjust the duration as needed
        return () => clearTimeout(timer);
      }
  }, [showLoader]);

  document.addEventListener('DOMContentLoaded', function () {
    const loaderWrapper = document.getElementById('warpper-spinner');
   
    setTimeout(function () {
      loaderWrapper.classList.add('fade-in');
      loaderWrapper.classList.remove('fade-out');
    }, 10000); // show loader after 300 milliseconds
   
    setTimeout(function () {
      loaderWrapper.classList.remove('fade-in');
      loaderWrapper.classList.add('fade-out');
    }, 10000); // hide loader after 3 seconds
  });

  return (
    <>
      {showLoader && (
        <div className="warpper-spinner">        
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}