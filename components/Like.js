import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import React, { useState } from 'react';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      {isLiked === false ? (
        <a>
          <IoMdHeartEmpty
            onClick={handleLikeClick}
            className="text-2xl text-zinc-300 z-50 absolute ml-[110px] hover:text-zinc-200 hover:scale-110 duration-200 cursor-pointer hover:outline-none"
          />
        </a>
      ) : (
        <a>
          <IoMdHeart
            onClick={handleLikeClick}
            className="text-2xl text-red-500 z-50 absolute ml-[110px] hover:scale-110 duration-200 cursor-pointer hover:outline-none"
          />
        </a>
      )}
    </>
  );
};

export default Like;
