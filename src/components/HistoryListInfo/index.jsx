import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ListInfo } from '../ListInfo';

export const HistoryListInfo = () => {
  return (
    <StyledItemsCategoryInfo>
      <TitleCategory>Date</TitleCategory>
      <CategoryContainer>
        <ListInfo />
        <ListInfo />
        <ListInfo />
      </CategoryContainer>

      <TitleCategory>Date</TitleCategory>
      <CategoryContainer>
        <ListInfo />
        <ListInfo />
        <ListInfo />
      </CategoryContainer>

      <TitleCategory>Date</TitleCategory>
      <CategoryContainer>
        <ListInfo />
        <ListInfo />
        <ListInfo />
      </CategoryContainer>
    </StyledItemsCategoryInfo>
  );
};
