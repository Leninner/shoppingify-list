import { StyledItemsView } from './styles';
import { HeaderItemsView } from '../../components/HeaderItemsView';
import { ItemsContainer } from '../../components/ItemsContainer';

export const ItemsView = () => {
  return (
    <StyledItemsView>
      <HeaderItemsView />
      <ItemsContainer />
    </StyledItemsView>
  );
};
