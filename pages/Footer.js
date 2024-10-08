import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoEarth } from 'react-icons/io5';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Footer = () => {
  const { t } = useTranslation();

  const router = useRouter();

  const [locale, setLocale] = useState(router.locale);

  useEffect(() => {
    setLocale(router.locale);
  }, [router.locale]);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'uk' : 'en';
    setLocale(newLocale);
  };

  return (
    <>
      <div className="flex min-w-full justify-center align-middle pb-3 mt-20">
        <a className="focus:outline-none" href={`/${router.locale}`}>
          <Image
            className="block h-14 box-content p-2 px-3 my-2 w-auto hover:scale-125 duration-300 "
            src="/logo.svg"
            alt="Your Company"
            width={100}
            height={100}
          />
        </a>
        <Link
          href="https://www.instagram.com/senorita.photo/"
          target="_blank"
          className="mt-7 ml-7"
        >
          <FaInstagram className="text-3xl hover:bg-gray-700 duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
        </Link>

        <a onClick={toggleLocale} href={`/${locale}${router.asPath}`}>
          <IoEarth className="text-[30px] ml-3 mt-7 hover:cursor-pointer hover:rotate-180 duration-500" />
        </a>
      </div>
      <div className="flex min-w-full justify-center pb-3">
        <h3 className="font-courier text-slate-600 text-xs md:text-sm p-7 text-center">
          {t(
            'Copyright @ 2024 Anastasia Yalovets | All Rights Reserved | Lviv | Ukraine'
          )}
        </h3>
      </div>
      <div className="flex w-screen justify-center pt-2 pb-5 font-courier">
        <h3>{t('Made with')}</h3>
        <FaHeart className="pt-1 text-red-500 text-xl ml-2.5" />
        <h3 className="mx-1.5">{t('by')}</h3>
        <a
          href="https://twitter.com/denys_podanenko"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <h3 className="font-semibold">{t('Denys Podanenko')}</h3>
          <FaExternalLinkAlt className="mt-0.5 ml-1.5" />
        </a>
      </div>
    </>
  );
};

export default Footer;
