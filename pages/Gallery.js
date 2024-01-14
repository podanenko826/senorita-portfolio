import TabGroup from './Tabs';
import ImgService from '../services/imgService';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  const imgService = new ImgService();
  const photos = await imgService.getCachePhotos();

  return {
    props: {
      mappedPhoto: photos,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Gallery({ mappedPhoto, locale }) {
  const { t } = useTranslation();

  return (
    <div className="h-full ">
      <main className=" md:pt-[30px] ">
        <TabGroup photos={mappedPhoto} />
      </main>
    </div>
  );
}
