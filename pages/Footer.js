import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaInstagram, FaFacebookF } from 'react-icons/fa6';

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
      </div>
      <div className="flex min-w-full justify-center pb-3">
        <h3 className="font-courier text-slate-600 text-xs md:text-sm p-7 text-center">
          {t(
            'Copyright @ 2024 Anastasia Yalovets | All Rights Reserved | Lviv | Ukraine'
          )}
        </h3>

        {/* <a
          href="https://twitter.com/denys_podanenko"
          target="_blank"
          className="flex"
        >
          <h3 className="font-extrabold font-mono">Denys Podanenko</h3>
          <FaExternalLinkAlt className="mt-0.5 ml-1.5" />
        </a> */}
      </div>
    </>
  );
};

export default Footer;
