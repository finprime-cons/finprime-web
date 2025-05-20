import React from "react";
import certificate1 from "../../../../assets/images/certificates/image1.jpg";
import certificate2 from "../../../../assets/images/certificates/image2.jpg";
import certificate3 from "../../../../assets/images/certificates/image3.jpg";
import certificate4 from "../../../../assets/images/certificates/image4.jpg";
import certificate5 from "../../../../assets/images/certificates/image5.jpg";
function certifcate() {
  return (
    <div className="w-[90vw] mt-[50px] md:mt-[100px] mx-auto flex flex-wrap justify-around gap-4 p-4 bg-white">
      <img
        src={certificate1}
        className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-cover rounded"
      />
      <img
        src={certificate2}
        className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-cover rounded"
      />
      <img
        src={certificate3}
        className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-cover rounded"
      />
      <img
        src={certificate4}
        className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-cover rounded"
      />
      <img
        src={certificate5}
        className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-cover rounded"
      />
    </div>
  );
}

export default certifcate;
