import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions } from './styles';

export const CategorySelect = ({ WrapperInput, categories }) => {
  return (
    <>
      <WrapperInput type='text' placeholder='Ingresa una categoría' />
      <ContainerOptions>
        {categories.map((elemento) => {
          const { id, name } = elemento;
          return <CategoryOptions key={id} category={name} />;
        })}
      </ContainerOptions>
    </>
  );
};
