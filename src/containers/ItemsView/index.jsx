import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { HeaderItemsView } from '../../components/HeaderItemsView';
import ItemsCategoryInfo from '../../components/ItemsCategoryInfo';

export const ItemsView = ({ categories, SeeInfo }) => {
  const categoriesToRender = categories.filter((category) => category.items.length > 0) || [];

  return (
    <StyledViewMain>
      <HeaderItemsView />
      <StyledContainerMain>
        {categoriesToRender.map((item) => {
          const { id } = item;
          return <ItemsCategoryInfo key={id} {...item} SeeInfo={SeeInfo} />;
        })}
      </StyledContainerMain>
    </StyledViewMain>
  );
};
