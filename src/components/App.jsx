import { useState, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { getSearch } from './API/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Button } from './Button/Button';

import { GlobalStyle } from 'GlobalStyle';
import { AppBox } from './App.styled';

export const App = () => {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(1);

  const clickLoad = () => {
    setPage(prevSt => prevSt + 1);
  };

  const onSubmitForm = newSearch => {
    setImage([]);
    setSearch(newSearch);
    setPage(1);
    setLoading(false);
    setTotal(1);
  };

  useEffect(() => {
    if (search.trim() === '') {
      return;
    }
    async function getValues() {
      try {
        setLoading(true);
        const dataObj = await getSearch(search, page);
        setImage(prevState => [...prevState, ...dataObj.hits]);
        setTotal(dataObj.total);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    getValues();
  }, [search, page]);

  return (
    <AppBox>
      <Searchbar onSubmitFilter={onSubmitForm} />
      <ImageGallery gallery={image} />
      {loading && <Loader />}
      {total / 12 > page && <Button clickLoad={clickLoad} />}
      <GlobalStyle />
    </AppBox>
  );
};
// return (
//   <AppBox>
//     <Searchbar onSubmitFilter={onSubmitForm} />
//     <ImageGallery gallery={image} />
//     {loading && <Loader />}
//     {total / 12 > page && <Button clickLoad={clickLoad} />}
//     <GlobalStyle />
//   </AppBox>
// );
