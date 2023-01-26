import ImageUpload from '../components/ImageUpload';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ImageUpload />
    </div>
  );
};

export default Home;
