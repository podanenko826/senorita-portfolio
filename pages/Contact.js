import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>SENORITA PHOTOGRAPHY</title>
        <meta name="description" content="Anastasiia Yalovets Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center min-w-full py-20 bg-slate-700">
        <h1 className="py-20 uppercase text-6xl text-zinc-500 font-semibold">
          {t('Contact')}
        </h1>
        {/* <h1 className="text-2xl text-slate-400 font-serif">
          Text me on Instagram
        </h1> */}
        <div className="flex flex-col items-center justify-center space-y-10 hover:scale-x-105 duration-300 shadow-lg bg-slate-500 my-20 w-64 h-64 rounded-xl">
          <FaInstagram className="text-4xl fill-slate-700" />
          <Link
            href="https://www.instagram.com/senorita.photo/"
            target="_blank"
          >
            <h1 className="text-2xl text-slate-700 hover:text-slate-800 transition-colors">
              senorita.photo
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
