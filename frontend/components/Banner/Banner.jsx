import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './banner.css';
import youtubeIcon from '../../images/youtube.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full">
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#fff' }}>
        
        {/* ✅ Embedded YouTube video with autoplay, mute, loop, etc. */}
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/eJBWeMGgF_U?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&fs=0&iv_load_policy=3&disablekb=1&playsinline=1&loop=1&playlist=eJBWeMGgF_U"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="YouTube Background Video"
        ></iframe>

       {/* ▶️ YouTube Redirect Play Button */}
<div className="absolute inset-0 flex items-center justify-center z-10">
  <Link
    to="/youtube-broadcast-channel"
    className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-opacity-90 transition-all duration-300"
  >
    <FaPlay className="text-red-600 text-xl sm:text-3xl md:text-4xl ml-[2px] sm:ml-2" />
  </Link>
</div>
<div className="hidden md:flex absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-8 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 z-20 max-w-[90%]">
  
  {/* YouTube logo */}
  <Link to="/youtube-broadcast-channel">
    <div
      className="youtube-logo-box"
      style={{
        width: '120px',
        height: '40px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10px',
      }}
    >
      <img
        src={youtubeIcon}
        alt="YouTube"
        style={{ height: '20px', width: 'auto', display: 'block' }}
      />
    </div>
  </Link>

  {/* Move only the text up */}
  <div className="relative -top-10 sm:-top-16 md:-top-24">
    <h2 className="text-base sm:text-lg md:text-6xl font-medium leading-snug sm:leading-tight text-white font-['Roboto'] text-left">
      Your <br />
      concerns <br />
      become our <br />
      mission.
    </h2>
  </div>
</div>
</div>
</div>
  );
};

export default Banner;
