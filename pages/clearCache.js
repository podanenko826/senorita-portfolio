import ImgService from '../services/imgService';

export default clearCache = () => {
  return (
    <div>
      <h2>cachee clear</h2>
    </div>
  );
};

export async function getServerSideProps() {
  const imgService = new ImgService();
  await imgService.clearCache();

  return {
    props: {},
  };
}
