import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItem } from '../../components/AddItem';
import { ListItems } from '../../components/ListItems';

export const InteractiveAside = () => {
  return (
    <StyledInteractiveAside>
      <BoxFeedback />
      <ListItems />
      <AddItem />
    </StyledInteractiveAside>
  );
};
