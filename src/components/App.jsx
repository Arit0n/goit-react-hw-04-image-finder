import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { getSearch } from './API/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Button } from './Button/Button';

import { GlobalStyle } from 'GlobalStyle';
import { AppBox } from './App.styled';

export class App extends Component {
  state = {
    image: [],
    search: '',
    page: 1,
    visibleModal: false,
    loading: false,
    total: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const dataObj = await getSearch(this.state.search, this.state.page);
        console.log(dataObj);
        this.setState(prevState => ({
          image: [...prevState.image, ...dataObj.hits],
          total: dataObj.total,
        }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  clickLoad = () => {
    this.setState(prevSt => ({
      page: prevSt.page + 1,
    }));
  };

  onSubmitForm = newSearch => {
    this.setState({
      image: [],
      search: newSearch,
      page: 1,
      loading: false,
      total: 1,
    });
  };

  render() {
    const { image, page, loading, total } = this.state;
    return (
      <AppBox>
        <Searchbar onSubmitFilter={this.onSubmitForm} />
        <ImageGallery gallery={image} />
        {loading && <Loader />}
        {total / 12 > page && <Button clickLoad={this.clickLoad} />}
        <GlobalStyle />
      </AppBox>
    );
  }
}
