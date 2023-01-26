import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import { useFetchImage } from '../hooks/useFetchImage';
import { imgToBase64 } from '../utils/imgToBase64';

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<{ image: File; url: string }[]>([]);
  const [file, setFile] = useState<FileList | null>();
  const { images: oldImage } = useFetchImage([
    'https://res.cloudinary.com/doyouhave/image/upload/v1674652200/12345/profile_rf2jwj.png',
    'https://res.cloudinary.com/doyouhave/image/upload/v1674737243/12345/oglogo_dawyz2.png',
  ]);

  const selectImage = () => {
    if (images.length >= 2)
      return alert('이미지는 2개까지만 업로드 가능합니다.');
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const deleteImage = (clickedImage: File) => {
    setImages((prev) => prev.filter((item) => item.image !== clickedImage));
  };

  useEffect(() => {
    if (file) {
      Array.from(file).map((image) => {
        imgToBase64(image).then((data) =>
          setImages((prev) => [...prev, { image: image, url: data as string }])
        );
      });
    }
  }, [file]);

  useEffect(() => {
    if (oldImage.length) {
      setImages(oldImage);
    }
  }, [oldImage]);

  return (
    <>
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        hidden
        onChange={(e) => setFile(e.target.files)}
      />
      <span
        style={{
          display: 'inline-block',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={selectImage}>
        {images.length}/2
      </span>
      <ImgContainer>
        {images.map((item) => (
          <div key={item.image?.name}>
            <span onClick={() => deleteImage(item.image)}>x</span>
            <ImgBox src={item.url} size={100} />
          </div>
        ))}
      </ImgContainer>
    </>
  );
};

export default ImageUpload;

const ImgContainer = styled.div`
  display: flex;
`;

const ImgBox = styled.div<{ src: string; size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid black;
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: cover;
`;
