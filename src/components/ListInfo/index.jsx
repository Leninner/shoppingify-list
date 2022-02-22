import { ListInfoContainer, TitleList, Icon, ListState, LinkListInfo } from './styles';

export const ListInfo = ({ shoppingListName, isCompleted, dateCompleted }) => {
  return (
    <LinkListInfo to={`/history/info-list/${shoppingListName}`}>
      <ListInfoContainer>
        <TitleList>{shoppingListName}</TitleList>
        <div>
          <Icon className='material-icons-outlined' color='#C1C1C4'>
            event_note
          </Icon>
          <Icon color='#C1C1C4' marginLeft='13px'>
            {dateCompleted}
          </Icon>
          <ListState isCompleted={isCompleted}>{isCompleted ? 'completed' : 'canceled'}</ListState>
          <Icon className='material-icons-outlined' color='#F9A109' marginRight='24.04px'>
            chevron_right
          </Icon>
        </div>
      </ListInfoContainer>
    </LinkListInfo>
  );
};
