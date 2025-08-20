import React from 'react';
import certificatesss from '../../images/certificate/certificatesss.jpg';

function Certificate() {
  return (
    <div className="px-0 sm:px-8 md:px-16 lg:px-24 xl:px-24 -mt-8 sm:-mt-16 ">
      <img
        src={certificatesss}
        alt="Certificates"
        className="w-full object-contain "
      />
    </div>
  );
}

export default Certificate;
