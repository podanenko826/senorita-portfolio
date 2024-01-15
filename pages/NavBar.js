'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IoEarth } from 'react-icons/io5';

// import { TfiInstagram, TfiFacebook } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function NavBar(props) {
  const navigation = [
    { id: 1, key: 'Home', href: '/' },
    { id: 2, key: 'Gallery', href: '/Gallery' },
    { id: 3, key: 'About Me', href: '/About' },
    { id: 4, key: 'Contact', href: '/Contact' },
  ];

  const { t } = useTranslation();

  const router = useRouter();

  const currentPath = usePathname();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full">
            <div className="relative h-full flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 bg-navbar flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-0.5 mr-4 text-slate-500 active:bg-gray-800 active:text-white focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-11 w-11 bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon className="block h-11 w-11" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-start sm:justify-between sm:h-32 sm:items-center">
                <div className="flex px-4 flex-shrink-0 flex-1 items-center h-full sm:justify-center justify-start bg-navbar shadow-sm">
                  <a
                    className="focus:outline-none hover:scale-110 duration-300"
                    href={`/${router.locale}`}
                  >
                    <Image
                      className="block h-14 box-content p-2 px-3 my-2 w-auto lg:hidden"
                      src="/logo.svg"
                      alt="Your Company"
                      width={100}
                      height={100}
                    />
                    <Image
                      className="hidden h-20 w-auto lg:block"
                      src="/logo.svg"
                      alt="Your Company"
                      width={100}
                      height={100}
                    />
                  </a>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={`/${router.locale}${item.href}`}
                          className={`${
                            currentPath === item.href ||
                            currentPath === `/${router.locale}${currentPath}`
                              ? 'text-slate-900'
                              : 'text-slate-500 hover:text-slate-800 duration-200'
                          } px-3 py-2 text-lg font-courier`}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {t(item.key)}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex gap-2 justify-center items-center ml-8">
                    {/* <Link
                      href="https://www.facebook.com/anastasia.nikolaevna.526"
                      target="_blank"
                    >
                      <TfiFacebook className="text-3xl  border-black-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
                    </Link> */}
                    <Link href={`/${router.locale}${currentPath}`}>
                      <IoEarth />
                    </Link>
                    <Link
                      href="https://www.instagram.com/senorita.photo/"
                      target="_blank"
                    >
                      <FaInstagram className="text-3xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 justify-center items-center flex-col pt-2 text-center bg-slate-100 absolute w-full ">
              {navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  key={item.id}
                  href={`/${router.locale}${item.href}`}
                  className={`${
                    currentPath === item.href ||
                    currentPath === `/${router.locale}${item.href}`
                      ? 'bg-slate-600 text-white'
                      : 'text-gray-300 hover:bg-slate-400 hover:text-white'
                  } block px-3 py-2 rounded-md text-slate-500 font-medium`}
                >
                  {t(item.key)}
                </Disclosure.Button>
              ))}
              <div className="flex w-full justify-center gap-2 py-4 border-y-2 lg:hidden">
                <Link href="https://www.instagram.com/senorita.photo/">
                  <FaInstagram className="text-2xl fill-slate-600 border-black-2 hover:scale-125 duration-150 hover:fill-slate-900" />
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
