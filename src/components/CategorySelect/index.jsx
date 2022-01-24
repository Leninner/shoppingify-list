import { CategoryOptions } from '../CategoryOption';

export const CategorySelect = ({ WrapperInput }) => {
  return (
    <>
      <WrapperInput type='text' placeholder='Ingresa una categoría' />
      {[1, 2, 3].map((i) => (
        <CategoryOptions key={i} />
      ))}
    </>
  );
};
