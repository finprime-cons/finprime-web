import React from 'react'
import certificate1 from '../../images/certificates/image1.jpeg';
import certificate2 from '../../images/certificates/image2.jpeg';
import certificate3 from '../../images/certificates/image3.jpeg';
import certificate4 from '../../images/certificates/image4.jpeg';
import certificate5 from '../../images/certificates/image5.jpeg';
function certifcate() {
    return (
        <div class="w-[90vw] mb-[50px] md:mb-[100px] mx-auto flex flex-wrap justify-around gap-4 p-4 bg-white">
            <img src={certificate1} class="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-fill rounded" />
            <img src={certificate2} class="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-fill rounded" />
            <img src={certificate3} class="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-fill rounded" />
            <img src={certificate4} class="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-fill rounded" />
            <img src={certificate5} class="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-fill rounded" />
        </div>
    )
}

export default certifcate
