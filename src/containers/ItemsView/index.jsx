import { StyledItemsView } from './styles';
import { HeaderItemsView } from '../../components/HeaderItemsView';
import { ItemsContainer } from '../ItemsContainer';

export const ItemsView = ({ categories }) => {
  return (
    <StyledItemsView>
      <HeaderItemsView />
      <ItemsContainer categories={categories} />
    </StyledItemsView>
  );
};
