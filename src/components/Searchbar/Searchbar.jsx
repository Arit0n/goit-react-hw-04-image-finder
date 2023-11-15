import { BiSearch } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { Formik } from 'formik';

import { StyledForm, Button, Input, SearchbarStyled } from './Searchbar.styled';

export const Searchbar = ({ onSubmitFilter }) => {
  const notify = () => toast('Введи щось для пошуку');

  return (
    <SearchbarStyled>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values, actions) => {
          if (!values.search) {
            return notify;
          } else {
            onSubmitFilter(values.search);
            actions.resetForm();
          }
        }}
      >
        <StyledForm>
          <Button type="submit">
            <span>
              <BiSearch />
            </span>
          </Button>

          <Input
            name="search"
            id="search"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </SearchbarStyled>
  );
};
