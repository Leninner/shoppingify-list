import { StyledItemsContainer } from './styles';
import ItemsCategoryInfo from '../../components/ItemsCategoryInfo';

export const ItemsContainer = ({ categories, SeeInfo }) => {
  const categoriesToRender = categories.filter((category) => category.items.length > 0) || [];

  return (
    <StyledItemsContainer>
      {categoriesToRender.map((item) => {
        const { id } = item;
        return <ItemsCategoryInfo key={id} {...item} SeeInfo={SeeInfo} />;
      })}
    </StyledItemsContainer>
  );
};
