// components/ScrollToTopButton.js
import { useEffect, useState } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 2000) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="flex flex-col fixed min-w-full items-end justify-end z-50">
      <button
        className={`scroll-to-top ${
          isVisible ? 'hidden' : ''
        } m-14 text-2xl hover:scale-125 duration-300 bg-white p-1 rounded-full z-50`}
        onClick={scrollToTop}
      >
        <FaRegArrowAltCircleUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
