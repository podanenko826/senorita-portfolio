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

      <div className="flex flex-col min-w-full py-10 justify-center text-center items-center px-10 lg:px-20 bg-fixed bg-zinc-600">
        <h1 className="font-courier py-44 md:py-64 lg:py-80 text-neutral-50">
          {t(
            'Anastasia Yalovets is a professional photographer from Lviv city.'
          )}
          <br />
          {t('With an extraordinary approach of filming and editing.')} <br />
          {t(
            'From the first click of the shutter, she found her calling in such kind on art.'
          )}{' '}
          <br />
          {t('Unveils the beauty that belongs to everyone,')} <br />
          {t('and saves beautiful moments forever, here, on a photo...')}
        </h1>
      </div>
    </>
  );
}
