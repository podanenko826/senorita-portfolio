import Image from 'next/image';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>SENORITA PHOTOGRAPHY</title>
        <meta name="description" content="Anastasiia Yalovets Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-w-full py-10 justify-center text-center items-center px-10 lg:px-20 bg-fixed bg-story">
        <h1 className="text-3xl md:text-6xl lg:text-6xl text-slate-600 mt-10 lg:mt-36 tracking-wider lg:hover:tracking-[50px] lg:hover:text-[50px] duration-300 lg:hover:pl-10 lg:hover:p-2.5">
          {t('Story')}
        </h1>
        <h1 className="font-courier mt-24 lg:mt-44 p-1 bg-white">
          {t(
            "My journey in photography began a few years ago. From the first click of the shutter, I knew I had found my calling. Photography, for me, is more than just a profession; it's a way of life."
          )}
        </h1>
        <h1 className="font-courier mt-8 p-1 bg-white">
          {t(
            "I believe that every photograph tells a unique story, and my goal is to craft narratives that resonate with emotion and authenticity. Whether it's a candid moment, a breathtaking landscape, or a special event, I strive to freeze those instances in time, allowing them to be relived and cherished forever."
          )}
        </h1>
      </div>

      <div className="flex flex-col min-w-full py-10 justify-center text-center items-center px-10 lg:px-20 bg-fixed bg-style">
        <h1 className="text-3xl md:text-6xl lg:text-6xl text-slate-100 mt-10 lg:mt-36 tracking-wider lg:hover:tracking-[30px] lg:hover:text-[50px] duration-300 lg:hover:pl-10">
          {t('My Style')}
        </h1>
        <h1 className="font-courier mt-24 lg:mt-44 bg-white">
          {t(
            "My journey in photography began a few years ago. From the first click of the shutter, I knew I had found my calling. Photography, for me, is more than just a profession; it's a way of life."
          )}
        </h1>
        <h1 className="font-courier mt-8 bg-white">
          I believe that every photograph tells a unique story, and my goal is
          to craft narratives that resonate with emotion and authenticity.
          Whether it's a candid moment, a breathtaking landscape, or a special
          event, I strive to freeze those instances in time, allowing them to be
          relived and cherished forever.
        </h1>
      </div>
    </>
  );
}
