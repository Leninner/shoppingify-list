import { ListInfoContainer, TitleList, Icon, ListState } from './styles';

export const ListInfo = () => {
  return (
    <ListInfoContainer>
      <TitleList>Grocery List</TitleList>
      <div>
        <Icon className='material-icons-outlined' color='#C1C1C4'>
          event_note
        </Icon>
        <Icon color='#C1C1C4' marginLeft='13px'>
          Mon 27 8 2022
        </Icon>
        <ListState>completed</ListState>
        <Icon className='material-icons-outlined' color='#F9A109' marginRight='24.04px'>
          chevron_right
        </Icon>
      </div>
    </ListInfoContainer>
  );
};
