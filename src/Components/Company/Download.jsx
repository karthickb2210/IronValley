import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=10Avtuwa83f3En2dMlDwY9NoEz-xHDmZw'; // Replace with your actual file ID
    link.download = 'IronValley_Brochure.pdf'; // This sets the default name of the downloaded file
    link.click();
  };
 
  return (
    <div className="flex bg-zinc-600 bg-opacity-50 justify-between py-8 px-8 rounded-2xl  items-center  mx-14  mt-8 relative">
    <div className=' text-white text-2xl'>Download Our Brochure</div>
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Download 
      </button>
    </div>
  );
};

export default DownloadButton;
