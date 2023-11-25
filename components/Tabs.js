import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Gallery from './Gallery';

export default function TabGroup({ photos }) {
  const [showMore, setShowMore] = useState(true);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const buttonLabel = showMore ? 'Show More →' : 'Show Less →';

  const buttonKey = showMore ? 'Photo-2' : 'Photo-1';

  return (
    <div className="flex flex-col items-center w-full pt-0 ">
      <div className="flex min-w-full justify-center">
        <h1 className="text-6xl p-14 font-courier text-center">Recent work</h1>
      </div>
      <Tab.Group>
        <Tab.List className="pt-4">
          <Tab className="p-auto mr-3 uppercase text-xl" key={buttonKey}>
            <span className="ml-8" onClick={toggleShowMore}>
              {buttonLabel}
            </span>
          </Tab>
        </Tab.List>
        <Tab.Panels className="h-full max-w-[1500px] w-full p-3 my-6">
          <Tab.Panel key={buttonKey}>
            <Gallery
              allImages={photos.filter((photo) => photo.folder === buttonKey)}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
