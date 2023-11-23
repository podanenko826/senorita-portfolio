import Masonry from "react-masonry-css";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useRef } from "react";
// css style
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

export default function Gallery({ allImages }) {
  let lightGallery = useRef(null);
  return (
    <div>
      <Masonry
        className="flex w-auto gap-12 px-4 "
        breakpointCols={breakpointColumnsObj}
      >
        {allImages.map((photo, idx) => (
          <Image
            src={photo.url}
            className="pb-6"
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
        ))}
      </Masonry>
      {
        <LightGallery
          onInit={ref => {
            if (ref) {
              lightGallery.current = ref.instance;
            }
          }}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={allImages.map(({ url }) => ({
            src: url,
            thumb: url
          }))}
        />
      }
    </div>
  );
}
