import { useEffect, useState } from 'react';

import { getImg } from '../apis/image';
import { ImageData } from '../interfaces/data';

const useGetMain = () => {
  const [main, setMain] = useState<ImageData>({ cloud: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getImg();
        setMain(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return { data: main, isLoading };
};
export default useGetMain;
