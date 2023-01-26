import styled from '@emotion/styled';

import ImageUpload from '../components/ImageUpload';
import useGetMain from '../hooks/useGetMain';

const Home = () => {
  const { data, isLoading } = useGetMain();
  if (isLoading) return <div>loading...</div>;
  return (
    <Container>
      <ImageUpload oldImage={data.cloud.split(', ')} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
