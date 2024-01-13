import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Header(locale) {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" flex flex-col bg-slate-000 py-6  border-stone-400 py_-9">
        {/* <div className="px-8 flex flex-col justify-center items-center lg:flex-row lg:pr-16 ">
                    <CiFacebook className="text-4xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"/>
                    <button className='hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'><CiInstagram className="text-4xl" /></button>
                    <CiInstagram className="text-4xl" />
                </div> */}
        {/* <div className="hidden lg:flex flex-col gap-2 justify-center items-center ml-8">
          <TfiFacebook className="text-3xl  border-black-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
          <TfiInstagram className="text-3xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
        </div> */}
        <div className="flex-auto px-6 justify-center uppercase text-center leading-normal tracking-wider">
          <h1 className="lg:text-[40px]">{t('headertext')}</h1>
          <p className="italic text-base pt-2 normal-case">
            &ldquo;{t('headerquote')}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
