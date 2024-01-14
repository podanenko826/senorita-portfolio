import Masonry from 'react-masonry-css';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import Like from './Like';
import Head from 'next/head';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useRef, useState } from 'react';
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
    <>
      <Head>
        <title>SENORITA PHOTOGRAPHY</title>
        <meta name="description" content="Anastasiia Yalovets Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masonry
        className="flex w-auto gap-2 px-2 lg:px-64 md:px-20 sm:px-14 relative"
        breakpointCols={breakpointColumnsObj}
      >
        {allImages.map((photo, idx) => (
          <div key={idx} className="overflow-hidden mb-2">
            {/* <Like /> */}
            <Image
              src={photo.url}
              className="transition-transform ease-in-out duration-500 hover:scale-125 hover:cursor-pointer hover:opacity-95"
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
          licenseKey="1111-1111-111-1111"
          download={false}
          mousewheel={true}
          mobileSettings
        />
      }
    </>
  );
}
