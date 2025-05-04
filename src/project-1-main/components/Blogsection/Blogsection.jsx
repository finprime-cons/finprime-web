import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const BlogCard = ({ title, image, description, id, date, blog_slug }) => {
  return (
    <div className="relative pt-6 sm:px-0 overflow-hidden w-full lg:w-[420px] xl:w-[600px] 2xl:w-[700px] mx-auto flex flex-col lg:h-full">
      <img
        src={image || 'path/to/default/image.jpg'} // Default image fallback
        alt={title}
        className="w-full h-[200px] lg:h-60 xl:h-72 rounded-[10px] object-cover transition-transform duration-300 transform hover:scale-90"
      />
      <div className="py-4 px-4 relative flex-grow text-left">
        <h3 className="text-black text-xl xl:text-[22px] tracking-[1px] font-semibold font-raleway body pb-4 px-1 lg:px-3">{title}</h3>
        <div
          className="text-black text-sm xl:text-[16px]  mb-16 leading-relaxed px-1 lg:px-3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description, {
              ALLOWED_TAGS: ['b', 'i', 'u', 'ol', 'ul', 'li', 'h1', 'h2', 'h3', 'p', 'a', 'strong', 'em'],
              ALLOWED_ATTRS: ['href', 'src', 'alt', 'style', 'class', 'id', 'target', 'title'],
            }),
          }}
        />
        <p className="absolute bottom-6 right-2 pr-2 lg:pr-7 text-md text-gray-600">{date}</p>
        <Link

          to={`/blogs/${blog_slug}`}
          state={{ id: id }}
          className="absolute bottom-6 mx-4 font-medium left-2 px-8 py-2 text-xs sm:text-[14px] bg-blue-950 font-raleway text-white rounded-full duration-300
           ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://finprimeconsulting.com/api/blogs');
      const sortedBlogs = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 4);
      setBlogs(sortedBlogs);
    } catch (err) {
      setError('Error fetching blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-8/10 ml-6 mr-4 md:ml-8 md:mr-6 lg:ml-10 lg:mr-8 xl:ml-12 xl:mr-10 bg-pink-50 mt-16 pt-8 pb-8 px-8">
        <h4 className="text-3xl lg:text-4xl font-semibold font-raleway mb-4 md:mb-0">Daily Articles</h4>
        <Link
          to="/blog"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-950 text-white text-[12px] sm:text-xs lg:text-[16px] tracking-[1px] px-5 rounded-[5px] py-3 duration-300 ease-out hover:bg-gradient-to-r
           hover:from-brandBlue hover:to-cyan-500 font-raleway"
        >
          All Access Articles
        </Link>
      </div>

      {/* Blog Cards Section */}
      <div className="mt-10 sm:mt-20 ml-6 mr-4 md:ml-8 md:mr-6 lg:ml-10 lg:mr-8 xl:ml-12 xl:mr-10">
        <div className="lg:flex flex-wrap">
          {loading ? (
            <p className="text-center">Loading blogs...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : blogs.length === 0 ? (
            <p className="text-center">No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <div className="w-full md:w-full lg:w-1/2 cursor-pointer" key={blog.id}>
                <BlogCard
                  image={blog.image_path ? `https://finprimeconsulting.com/${blog.image_path}` : null}
                  date={new Date(blog.created_at).toLocaleDateString()}
                  title={blog.topic}
                  description={DOMPurify.sanitize(blog.content.split(/\s+/).slice(0, 30).join(' '))}
                  id={blog.id}
                  blog_slug={blog.blog_slug}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;