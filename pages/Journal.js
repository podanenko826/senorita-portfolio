import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Journal(locale) {
  const { t } = useTranslation();

  return (
    <div className="min-w-full px-8 flex gap-4 overflow-hidden py-16 pb-24 bg-gray-50 journal">
      <div className="flex flex-col min-w-full xl:px-72 mb-6 items-between">
        <p className="text-6xl text-center uppercase font-semibold border-b-4 border-black p-10">
          {t('news')}
        </p>
        <h1 className="text-3xl md:text-[35px] font-courier text-center md:p-8 mt-8 mb-12 md:mb-4">
          &quot;{t('journalquote')}&quot;
        </h1>
        <h1 className="leading-5 text-sm font-courier pl-6 text-left">
          <strong className="text-3xl font-semibold">
            {t('journaltitle1')}
          </strong>
          {t('journaltext1')}
          <br /> <br />
        </h1>
        <h1 className="leading-5 text-sm font-courier pl-6 text-left">
          <strong className="text-3xl font-semibold">
            {t('journaltitle2')}
          </strong>
          {t('journaltext2')}
          <br /> <br />
        </h1>
        <h1 className="leading-5 text-sm font-courier pl-6 text-left hidden md:block">
          <strong className="text-3xl font-semibold">
            {t('journaltitle3')}
          </strong>
          {t('journaltext3')}{' '}
        </h1>
      </div>
      <div className="w-3/4 h-96 bg-transparent"></div>
    </div>
  );
}
