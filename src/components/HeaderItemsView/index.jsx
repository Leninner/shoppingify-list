import { Header, SearchContainer } from './styles';

export const HeaderItemsView = () => {
  return (
    <Header>
      <h3>
        <span>Shoppingify</span> allows you to take your shopping list wherever you go
      </h3>
      <SearchContainer>
        <span class='material-icons'>search</span>
        <input type='text' placeholder='Search item' />
      </SearchContainer>
    </Header>
  );
};
