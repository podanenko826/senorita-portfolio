import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Gallery from '../components/Gallery';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function TabGroup({ photos, locale }) {
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(true);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const buttonLabel = showMore ? t('Show More >') : t('Show Less <');

  const buttonKey = showMore ? 'Photo-1' : 'Photo-2';

  const currentPath = usePathname();

  const router = useRouter();

  if (currentPath === '/' || currentPath === `/${router.locale}`) {
    return (
      <div className="flex flex-col items-center w-full pt-0 ">
        <div className="flex min-w-full justify-center">
          <h1 className="text-6xl p-14 mt-6 font-courier text-center">
            {t('Recent Work')}
          </h1>
        </div>
        <Tab.Group>
          <Tab.List className="pt-4">
            <Tab className="p-auto mb-14 uppercase text-xl" key={buttonKey}>
              <span
                className="flex border-b-2 text-blue-500 border-blue-500 active:text-indigo-300 active:border-indigo-300 tracking-wider hover:-tracking-[-8px] hover:text-[19px] duration-300"
                onClick={toggleShowMore}
              >
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
          <div className="flex flex-col items-center w-full pt-0 ">
            <div className="flex min-w-full justify-center">
              <h1 className="text-6xl py-14 font-courier text-center">
                {t('More Examples?')}
              </h1>
            </div>

            <a className="pt-4 mb-20" href="/Gallery">
              <span className="text-blue-500 border-b-2 border-blue-500 active:text-indigo-300 active:border-indigo-300 font-thin p-auto uppercase text-xl tracking-wider hover:-tracking-[-8px] hover:text-[19px] duration-300">
                {t('Gallery >')}
              </span>
            </a>
            <Tab.Panels className="h-full max-w-[1500px] w-full p-3 my-6">
              <Tab.Panel key={buttonKey}>
                <Gallery
                  allImages={photos.filter(
                    (photo) => photo.folder === buttonKey
                  )}
                />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center w-full pt-0 ">
        <div className="flex min-w-full justify-center">
          <h1 className="text-6xl p-14 font-courier text-center">
            {t('Gallery')}
          </h1>
        </div>
        <Tab.Group>
          <Tab.Panels className="h-full max-w-[1500px] w-full p-3 my-6">
            <Tab.Panel key="Photo-3">
              <Gallery
                allImages={photos.filter((photo) => photo.folder === 'Photo-3')}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  }
}
