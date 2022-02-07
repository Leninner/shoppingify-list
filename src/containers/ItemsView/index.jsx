import { StyledItemsView } from './styles';
import { HeaderItemsView } from '../../components/HeaderItemsView';
import { ItemsContainer } from '../ItemsContainer';

export const ItemsView = ({ categories, SeeInfo }) => {
  return (
    <StyledItemsView>
      <HeaderItemsView />
      <ItemsContainer categories={categories} SeeInfo={SeeInfo} />
    </StyledItemsView>
  );
};
