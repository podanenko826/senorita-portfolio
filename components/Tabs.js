import { Tab } from "@headlessui/react";
import Gallery from "./Gallery";

const tabs = [
  { key: "Photo-1", display: "Photo-1" },
  { key: "Photo-2", display: "Photo-2" },
  { key: "Photo-3", display: "Photo-3" }
];

export default function TabGroup({ photos }) {
  return (
    <div className="flex flex-col items-center w-full pt-0 ">
      <Tab.Group>
        <Tab.List className="pt-4">
          {tabs.map(tab => (
            <Tab
              className="p-auto mr-3 uppercase text-xl lg:mr-9"
              key={tab.key}
            >
              {({ selected }) => (
                <span
                  className={
                    selected
                      ? "bg-gray-700 text-white p-3 rounded-md"
                      : "bg-white text-black"
                  }
                >
                  {tab.display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="h-full max-w-[1500px] w-full p-3 my-6">
          {tabs.map(tab => (
            <Tab.Panel key={tab.key}>
              <Gallery
                allImages={photos.filter(photo => photo.folder === tab.key)}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
