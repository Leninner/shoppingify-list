import { ReturnButton, Header, MainInfo } from './styles';

export const HeaderHistoryListInfoView = ({ dateCompleted, newListName }) => {
  return (
    <Header>
      <ReturnButton to='/history'>
        <span className='material-icons'>arrow_back</span> Back
      </ReturnButton>
      <MainInfo>
        <h1>{newListName}</h1>
        <p>
          <span className='material-icons-outlined' color='#C1C1C4'>
            event_note
          </span>
          {dateCompleted}
        </p>
      </MainInfo>
    </Header>
  );
};
