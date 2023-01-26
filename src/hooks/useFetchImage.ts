import { useEffect, useState } from 'react';

import { convertURLtoFile } from '../utils/convertURLtoFile';
import { imgToBase64 } from '../utils/imgToBase64';

export const useFetchImage = (imageURL: string[]) => {
  const [images, setImages] = useState<{ image: File; url: string }[]>([]);

  useEffect(() => {
    const fetchImage = async (imageURL: string) => {
      const image = await convertURLtoFile(imageURL);
      const url = (await imgToBase64(image)) as string;
      setImages((prev) => [...prev, { image, url }]);
    };
    imageURL.map((image) => fetchImage(image));
  }, []);

  return { images };
};
