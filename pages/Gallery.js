import TabGroup from './Tabs';
import ImgService from '../services/imgService';

export default function Gallery({ mappedPhoto }) {
  return (
    <div className="h-full ">
      <main className=" md:pt-[30px] ">
        <TabGroup photos={mappedPhoto} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const imgService = new ImgService();
  const photos = await imgService.getCachePhotos();

  return {
    props: {
      mappedPhoto: photos,
    },
  };
}
