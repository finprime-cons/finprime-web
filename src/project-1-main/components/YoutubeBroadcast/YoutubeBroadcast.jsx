import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaHeadphones, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaVolumeUp } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import './YoutubeBroadcast.css';
import youtubeIcon from '../../images/youtube.png';
import Navbar from '../Navbar/Navbar';
import Inputsection from '../inputsection/Inputsection';
import Oursection from '../Oursection/Oursection';
import Blogsection from '../Blogsection/Blogsection';
import Faq from '../Faq/Faq';
import Text3 from '../Text/Text3';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import newSectionImage from '../../images/image.png';
import ceoImg from '../../images/team/Ashker.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PodcastCarousel from '../PodcastCarousel';
import { Link } from 'react-router-dom';



const youtubeVideos = [
    { id: 'eJBWeMGgF_U', title: 'Why Europeans Invest in Dubai ?' },
    { id: 'a-42nCoSl_A', title: 'Starting a Business in Dubai' },
    { id: 'mwh_a_p8p2Q', title: 'UAE Corporate Tax Insights' },
    { id: 'eJBWeMGgF_U', title: 'Fintech Innovations in 2024' },
    { id: 'a-42nCoSl_A', title: 'Real Estate Investment Guide' },
];

// Sample podcast data
const podcastList = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    episode: 'Episode 7',
    category: 'Technology',
    title: 'SRKP selects: open your mind easy',
    link: '#',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    episode: 'Episode 8',
    category: 'Technology',
    title: 'SRKP selects: keep your watch',
    link: '#',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    episode: 'Episode 9',
    category: 'Technology',
    title: 'SRKP selects: hide',
    link: '#',
  },
];

const VideoCard = ({ videoId, title, onPlay, isPlaying }) => {
    return (
        <div className="relative flex-shrink-0 w-full sm:w-[400px] h-[250px] bg-black rounded-lg overflow-hidden group">
            {isPlaying ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            ) : (
                <>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button
                            onClick={() => onPlay(videoId)}
                            className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
                        >
                            <FaPlay className="text-red-600 text-2xl ml-1" />
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white font-semibold text-lg">{title}</h3>
                    </div>
                </>
            )}
        </div>
    );
};


const YoutubeBroadcast = () => {
  const playerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  
    const waitForYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: 'eJBWeMGgF_U',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            rel: 0,
            loop: 1,
            playlist: 'eJBWeMGgF_U',
            modestbranding: 1,
            showinfo: 0,
            enablejsapi: 1,
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
              event.target.setPlaybackQuality('hd1080');
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                event.target.setPlaybackQuality('hd1080');
              }
            }
          }
        });
      } else {
        setTimeout(waitForYouTubeAPI, 100);
      }
    };
  
    // This will be triggered when the API is ready
    window.onYouTubeIframeAPIReady = waitForYouTubeAPI;
  
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);
  

  const handleScroll = (direction) => {
    const scrollAmount = 420; // Width of card + gap
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
  };

  const handlePlay = (videoId) => {
    setPlayingVideoId(videoId);
  };

  return (
    <>
      <div className="bg-black">
        <Navbar />
        {/* Top Banner Section */}
        <div className="w-full">
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#fff' }}>
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
            <div className="hidden md:flex absolute top-[70%] right-10 items-center h-14 bg-white bg-opacity-55 border border-opacity-20 px-4 space-x-2 rounded-sm z-20">
            <button className="px-3 py-1 rounded shadow text-[15px] tracking-[1px] bg-gradient-to-r from-brandBlue to-cyan-500 text-white">
            Follow
           </button>
         <div className="flex space-x-2">
        <a href="https://www.facebook.com/finprimeconsulting" aria-label="Facebook" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:border-opacity-10 hover:from-brandBlue hover:to-cyan-500 hover:text-white">
        <FaFacebookF size={20} />
      </a>
      <a href="https://x.com/FinPrimeConsult" aria-label="Twitter" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:border-opacity-10 hover:to-cyan-500 hover:text-white">
      <FaXTwitter size={20} />
      </a>
      <a href="https://www.linkedin.com/company/finprimeconsulting/" aria-label="LinkedIn" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:border-opacity-10 hover:to-cyan-500 hover:text-white">
      <RiLinkedinFill size={20} />
      </a>
    <a href="https://www.instagram.com/finprimeconsulting/" aria-label="Instagram" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10">
      <FaInstagramSquare size={20} />
    </a>
    <a href="https://www.youtube.com/@FinPrimeConsulting" aria-label="YouTube" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10">
      <FaYoutube size={20} />
    </a>
  </div>    
</div>
           
            {/* 📺 Logo and Text */}
            <div className="hidden md:flex absolute bottom-3 sm:bottom-6 md:bottom-56 left-4 md:left-32 sm:left-6 md:left-8 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 z-20 max-w-[90%]">
  
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
  <div className="relative -top-10 sm:-top-16 xl:-top-72  md:left-0">
    <h2 className="text-base tsm:text-lg md:text-5xl font-semibold leading-tight sm:leading-tight text-white font-['Roboto'] text-left">
      Your concerns become <br />
      our
      mission.
        </h2>
        </div>
        </div>
        </div>

          {/* Mobile: static card below banner, slightly overlaps with negative margin, rounded corners, white background */}
          <div className="block md:hidden  w-full max-w-none mt-0 bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
            <div className="flex flex-col items-center gap-0 w-full max-w-none shadow-xl  bg-white">
              <div className="flex-shrink-0 overflow-hidden shadow-lg bg-gray-100 w-full h-[230px] ml-0 ">
                <img src={ceoImg} alt="Ashker Kareem" className="w-full h-full object-cover object-top " />
              </div>
              <div className="flex-1 p-2 sm:p-6 flex flex-col mt-2 justify-center min-h-[180px] relative w-full">
                <div className="flex flex-col justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-2xl px-2 font-semibold font-[lato] leading-tight pt-0">
                    Who anticipate challenges and turn <br />
                    them into opportunities.
                  </h3>
                  <a href="#" className="px-2 text-xs sm:text-sm text-black hover:text-brandBlue font-semibold font-lato mt-1">
                    Episode page &rarr;
                  </a>
                </div>
                <div className=" px-2 text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">Episode 1 &bull; Microphone &bull; 0:13</div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 mb-2">
                  <span className=" px-2 font-semibold text-gray-800">Ashker Kareem</span>
                  <span className="px-2 text-xs text-gray-500">Founder & CEO</span>
                </div>
                {/* Custom Audio Controls */}
                <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 flex items-center gap-2 sm:gap-4">
                  <FaPlay className="text-[#CC0000] text-lg sm:text-2xl" />
                  <span className="text-gray-500 text-xs sm:text-base font-medium">0:00 / 0:00</span>
                  <FaVolumeUp className="text-black text-base sm:text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Desktop: absolute, overlapping card */}
          <div className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-[-15%] z-20 w-full max-w-5xl px-2 sm:px-4 mt-0" style={{ fontFamily: 'Lato, sans-serif' }}>
            <div className="flex flex-col md:flex-row items-center gap-0 px-0 sm:px-4 shadow-xl rounded-2xl bg-white max-w-5xl w-full">
              <div className="flex-shrink-0 rounded-sm overflow-hidden shadow-lg bg-gray-100 w-full md:w-[220px] h-[180px] md:h-[220px] ml-0 md:ml-[-20px]">
                <img src={ceoImg} alt="Ashker Kareem" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 p-2 sm:p-6 flex flex-col justify-center min-h-[180px] md:min-h-[220px] relative w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 md:mb-4">
                  <h3 className="text-lg sm:text-2xl font-semibold font-[lato] leading-tight pt-0">
                    Who anticipate challenges and turn <br />
                    them into opportunities.
                  </h3>
                  <a href="#" className="text-xs sm:text-sm text-black hover:text-brandBlue font-semibold font-lato mt-1 md:mt-0">
                    Episode page &rarr;
                  </a>
                </div>
                <div className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">Episode 1 &bull; Microphone &bull; 0:13</div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 mb-2">
                  <span className="font-semibold text-gray-800">Ashker Kareem</span>
                  <span className="text-xs text-gray-500">Founder & CEO</span>
                </div>
                {/* Custom Audio Controls */}
                <div className="absolute bottom-3 right-2 sm:bottom-6 sm:right-6 flex items-center gap-2 sm:gap-4">
                  <FaPlay className="text-[#CC0000] text-lg sm:text-2xl" />
                  <span className="text-gray-500 text-xs sm:text-base font-medium">0:00 / 0:00</span>
                  <FaVolumeUp className="text-black text-base sm:text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer div for CEO card overlap - now outside the black background */}
      <div className="h-8 md:h-[200px]" />
      {/* Discover text section */}
      <div className="px-8 w-full flex justify-center my-4 pb-10">
        <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1.25rem' }}>
          Discover the selection of the most popular podcasts.
        </span>
      </div>
      {/* Podcast Carousel Section */}
      <PodcastCarousel />
    </>
  );
};

export default YoutubeBroadcast; 