import Head from 'next/head';
import { Inter } from '@next/font/google';
import TabGroup from './Tabs';
import ImgService from '../services/imgService';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Journal from './Journal';

const inter = Inter({ subsets: ['latin'] });

// export function getStaticProps({ locale }) {
//   return {
//     props: {
//       locale,
//     },
//   };
// }
export async function getServerSideProps({ locale }) {
  const imgService = new ImgService();
  const photos = await imgService.getCachePhotos();

  return {
    props: {
      mappedPhoto: photos,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home({ mappedPhoto, locale }) {
  const { t } = useTranslation();

  return (
    <div className="h-full ">
      <Head>
        <title>Anastasiia Yalovets</title>
        <meta name="description" content="SENORITA PHOTOGRAPHY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(locale)}

      <main className=" md:pt-[30px] ">
        <Journal />
        <TabGroup photos={mappedPhoto} key="Photo-1" />
      </main>
    </div>
  );
}
