import Masonry from 'react-masonry-css';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import Like from './Like';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useRef } from 'react';
// css style
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 3,
};

export default function Gallery({ allImages }) {
  let lightGallery = useRef(null);
  return (
    <div>
      <Masonry
        className="flex w-auto gap-2 px-2 lg:px-64 md:px-20 sm:px-14"
        breakpointCols={breakpointColumnsObj}
      >
        {allImages.map((photo, idx) => (
          <div className="hover:scale-105 duration-300">
            <Like />
            <Image
              src={photo.url}
              className="pb-2"
              width={photo.width}
              height={photo.height}
              key={idx}
              alt="photo"
              placeholder="blur"
              blurDataURL={photo.dataUrl}
              onClick={() => {
                lightGallery.current.openGallery(idx);
              }}
            />
          </div>
        ))}
      </Masonry>
      {
        <LightGallery
          onInit={(ref) => {
            if (ref) {
              lightGallery.current = ref.instance;
            }
          }}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={allImages.map(({ url }) => ({
            src: url,
            thumb: url,
          }))}
        />
      }
    </div>
  );
}
