import { ButtonLoad } from './Button.styled';

export const Button = ({ clickLoad }) => {
  return (
    <ButtonLoad onClick={clickLoad} type="submit">
      Load More
    </ButtonLoad>
  );
};
