import styled from '@emotion/styled';

import ImageUpload from '../components/ImageUpload';

const Home = () => {
  return (
    <Container>
      <ImageUpload />
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
