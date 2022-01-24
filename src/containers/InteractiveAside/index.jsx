import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItemButton } from '../../components/AddItemButton';
import ListCategories from '../../components/ListCategories';

export const InteractiveAside = () => {
  return (
    <StyledInteractiveAside>
      <BoxFeedback />
      <ListCategories />
      <AddItemButton />
    </StyledInteractiveAside>
  );
};
