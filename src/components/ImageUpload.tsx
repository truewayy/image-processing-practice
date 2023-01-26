import styled from '@emotion/styled';

import { useFetchImage } from '../hooks/useFetchImage';

interface ImageUploadProps {
  oldImage: string[];
}

const ImageUpload = ({ oldImage }: ImageUploadProps) => {
  const { images, inputRef, setFile, handleClick, handleDelete } =
    useFetchImage(oldImage);

  return (
    <Container>
      {/* 연동 INPUT (hidden) */}
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        hidden
        onChange={(e) => setFile(e.target.files)}
      />
      {/* 사진 추가 버튼 */}
      <AddButton onClick={handleClick}>
        <img src='/icon-camera.png' alt='camera' width={40} />
        <div>{images.length}/2</div>
      </AddButton>

      {/* 사진 미리보기 */}
      <Container id='image'>
        {images.map((item) => (
          <ImgBox src={item.url} key={item.image.name}>
            {/* 사진 삭제 버튼 */}
            <RemoveButton
              src='/remove-button.png'
              onClick={() => handleDelete(item.image)}
            />
          </ImgBox>
        ))}
      </Container>
    </Container>
  );
};

export default ImageUpload;

const Container = styled.div`
  display: flex;
  align-items: center;
  &#image {
    gap: 10px;
  }
`;

const ImgBox = styled.div<{ src: string }>`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: cover;
`;

const AddButton = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const RemoveButton = styled.img`
  position: absolute;
  width: 20px;
  right: 0;
  cursor: pointer;
`;
