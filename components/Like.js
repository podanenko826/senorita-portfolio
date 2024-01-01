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
        <IoMdHeartEmpty
          onClick={handleLikeClick}
          className="text-3xl text-zinc-300 absolute mt-72 ml-[110px] hover:text-zinc-200 hover:scale-110 duration-200"
        />
      ) : (
        <IoMdHeart
          onClick={handleLikeClick}
          className="text-3xl text-red-500 absolute mt-72 ml-[110px] hover:scale-110 duration-200"
        />
      )}
    </>
  );
};

export default Like;
